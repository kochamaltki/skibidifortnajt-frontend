
<main>
    <h1>Twój Profil</h1>
    <div class="wrapper">
        <img src="sakura.jpg" alt="sakura uwu" class="profilowe">
        <div class="spacer"></div>
        <div class="tekst">
            <p>Imie: Sakura</p>
            <p>Nazwisko: Miyawaki</p>
        </div>
    </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #000000;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
    .profilowe {
        width:300px;height:300px;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1px;
    }
    .spacer {
        width: 50px;
        height: 100px;
    }
</style>