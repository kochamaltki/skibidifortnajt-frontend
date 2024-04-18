<script lang="ts">
    export let profilePictureUrl: string = "/images/profilepicture.jpg"
    import TextInput from "$components/TextInput.svelte";
    import Clickable from "$lib/shared/Clickable.svelte";
    let flaga: boolean = true;
</script>
<header>
<div class="bar">
    <div class="logo">
        <h1>Logo</h1>
    </div>
    <TextInput>
    </TextInput>
    {#if flaga == true}
        <div class="right-logged">
            <Clickable>
                <div class="create">
                    <h1>Create</h1>
                </div>
            </Clickable>
            <Clickable>
                <img src="{profilePictureUrl}" alt="profilowe" class="profilepicture">
            </Clickable>
        </div>
    {:else}
        <div class="right-signup">
            <div class="signup">
                <button>Sign up</button>
            </div>
            <div class="login">
                <button>Log in</button>
            </div>
        </div>
    {/if}
</div>
</header>

<style lang="scss">
    $bg: #181B29;
    $fg: #F0F0F0;
    $red: #FF4655;
    $maxWidth: 60px;
    .bar{
        right: 0;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $bg;
        width: 100%;
        margin: 0px;
    }
    .logo{
        h1{
            color: $fg;
            font-size: 48px;
            padding-top: 20px;
            padding-left: 40px;
            padding-bottom: 20px;
            margin: 0px;
        }
    }
    .right-logged{
        display: flex;
        align-items: center;
        //padding-top: 20px;
        //padding-right: 40px;
        //padding-bottom: 20px;
        column-gap: 40px;
    }
    .right-signup{
        display: flex;
        align-items: center;
        padding-top: 20px;
        padding-right: 40px;
        padding-bottom: 20px;
        column-gap: 40px;
    }
    .profilepicture{
        max-width: $maxWidth;
        border-radius: $maxWidth;
        margin-top: 18px;
        margin-right: 40px;
        margin-bottom: 18px;
    }
    .create{
        h1{
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: $red;
            color: $fg;
            font-weight: bold;
            font-size: 24px;
            width: 150px;
            height: 50px;
            border-radius: 30px;
            margin-top: 25px;
            margin-bottom: 25px;
            font-family: inherit;
        }
    }
    .signup{
        button{
            border: none;
            background-color: $red;
            color: $fg;
            font-weight: bold;
            font-size: 24px;
            width: 150px;
            height: 50px;
            border-radius: 30px;
            font-family: inherit;
        }
    }
    .login{
        button{
            border: none;
            background-color: $red;
            color: $fg;
            font-weight: bold;
            font-size: 24px;
            width: 150px;
            height: 50px;
            border-radius: 30px;
            font-family: inherit;
        }
    }

</style>

