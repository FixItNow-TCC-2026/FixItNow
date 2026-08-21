function Config() {
    return(
    <div>
        <h1 className="text-lg font-bold text-white">⚙️ Configurações</h1>

        <label name='modo'>
            <h3>Selecione o modo do site</h3>
            <form action="">
                <select name="black" id="black">modo escuro</select>
                <select name="white" id="white">modo claro</select>
            </form>
        </label>
    </div>
    );
}
export default Config;