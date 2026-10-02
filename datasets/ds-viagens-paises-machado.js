/**
 * Dataset Fluig: lista de países para o app de viagens.
 *
 * Contrato do Fluig: a plataforma invoca a função global createDataset
 * passando (fields, constraints, sortFields). No runtime do Fluig as globais
 * (DatasetBuilder, etc.) já existem, por isso NÃO usamos require/import/module.exports.
 * Código em ES5 (var) para compatibilidade com o motor de script do Fluig.
 */
function createDataset(fields, constraints, sortFields) {
    // Os três parâmetros existem apenas para respeitar o contrato do Fluig.
    // Este dataset retorna uma lista fixa de países e não filtra/ordena pela
    // plataforma, então neutralizamos os parâmetros para evitar avisos de
    // "variável não utilizada" e deixar explícita a intenção.
    void fields;
    void constraints;
    void sortFields;

    var ds = DatasetBuilder.newDataset();

    // Exatamente 3 colunas, nesta ordem: codigo, nome, sigla.
    ds.addColumn("codigo");
    ds.addColumn("nome");
    ds.addColumn("sigla");

    // 20 países no formato [codigo ISO-3, nome em português, sigla ISO-2].
    // Brasil obrigatoriamente como primeira linha.
    var paises = [
        ["ARG", "Argentina", "AR"],
        ["BRA", "Brasil", "BR"],
        ["URY", "Uruguai", "UY"],
        ["PRY", "Paraguai", "PY"],
        ["CHL", "Chile", "CL"],
        ["BOL", "Bolívia", "BO"],
        ["PER", "Peru", "PE"],
        ["COL", "Colômbia", "CO"],
        ["USA", "Estados Unidos", "US"],
        ["CAN", "Canadá", "CA"],
        ["MEX", "México", "MX"],
        ["PRT", "Portugal", "PT"],
        ["ESP", "Espanha", "ES"],
        ["FRA", "França", "FR"],
        ["ITA", "Itália", "IT"],
        ["DEU", "Alemanha", "DE"],
        ["GBR", "Reino Unido", "GB"],
        ["JPN", "Japão", "JP"],
        ["CHN", "China", "CN"],
        ["AUS", "Austrália", "AU"]
    ];

    // Laço for clássico adicionando cada país como uma linha do dataset.
    for (var i = 0; i < paises.length; i++) {
        ds.addRow(paises[i]);
    }

    return ds;
}
