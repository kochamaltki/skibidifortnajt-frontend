<script lang="ts">
	import Card from "$lib/shared/Card.svelte";
	import Button from "$lib/shared/Button.svelte";
	import Input from "$lib/shared/Input.svelte";
	import TextArea from "$lib/shared/TextArea.svelte";

	import { sideProfileStore } from "$lib/sideProfileStore";
	import { userStore } from "$lib/userStore";
    import { get } from "svelte/store";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
	import until from "$lib/until";
    import { postStore } from "$lib/postStore";

	let data = get(userStore);
	if(data.loggedIn) {
		sideProfileStore.viewSideProfile(data.id);
	} else {
		sideProfileStore.hideSideProfile();
	}

	let file: any = [];
	let fileInput: any;
	let profilePicture = "";
	let displayName = "";
	let description = "";

	$: if (file.length) {
		profilePicture = URL.createObjectURL(file[0]);
	}

	onMount(() => {
		until(() => $userStore.loggedIn).then(_ => {
			profilePicture = $userStore.profilePicture;
			displayName = $userStore.displayName;
			description = $userStore.description;
		})
	 })
</script>

<!--
TODO: 
- change password
-->

<div class="container">
	<Card>
		<div class="subcontainer">
			<div class="pfp">
				<div class="av">
					{#if profilePicture != ""}
						<img src={profilePicture} alt="profilepicture">
					{:else}
						<h1>Profile Picture</h1>
					{/if}
				</div>
				<div class="buttons">
					<label for="pfp-input">
						<Button on:click={() => {
							fileInput.click()
						}}>Upload New</Button>
					</label>

					{#if profilePicture != ""}
						<Button on:click={async () => {
							profilePicture = "";
						}}>Delete</Button>
					{/if}
				</div>
			<input bind:this={fileInput} bind:files={file} style="display: none;" type="file" accept="image/png">
			</div>

			<div class="setting">
				<h1> Display Name </h1>
				<Input placeholder="Display Name" bind:input={displayName}></Input>
			</div>

			<div class="setting">
				<h1> Description </h1>
				<TextArea rows={3} placeholder="Description" bind:input={description}></TextArea>
			</div>

			<div class="buttons">
				<Button on:click={async () => {
					await userStore.changeDescription(description);
					await userStore.changeDisplayName(displayName);
					if (profilePicture == "") {
						await userStore.deleteProfilePicture($userStore.id);
					} else {
						await postStore.uploadFile(file[0]).then(async imageId => {
							await userStore.setProfilePicture($userStore.id, imageId);
						})
					}

					await userStore.sync();
					goto("/")
				}}>
					Save
				</Button>
				<Button on:click={async () =>{
					await userStore.deleteAccount($userStore.id);
					$userStore.loggedIn = false;
					goto("/")
				}}>
					Delete Account
				</Button>
			</div>
		</div>
	</Card>
</div>

<style lang="scss">
	h1 {
		width: inherit;
		font-size: 30px;
	}

	.setting {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.av {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.pfp {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.buttons {
		display: flex;
		gap: 20px;
	}

	.subcontainer {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 40px;
	}

	img {
		border-radius: 64px;
		width: 128px;
		height: 128px;
	}

	.container {
		width: 800px;
	}
</style>
