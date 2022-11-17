import react from "react";
import {Text, View, StyleSheet, Image, ScrollView, Linking,  SafeAreaView, ImageBackground } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={estilo.container}>
            <ScrollView>
                <Text style={estilo.titulo}>Benizi</Text>
                <Text style={estilo.textos}>Entenda o que são as Doenças Raras e como a falta de conhecimento afeta os pacientes </Text>

            <View style={estilo.container2}>
                <Image style={estilo.img} source={require("../../../assets/dr.jpg")}/>
                <View style={estilo.card}>
                    <Text style={estilo.titulo_card}>O que é?</Text>
                    <Text style={estilo.texto_card}>As doenças raras podem ser definidas como aquela que afeta até 65 pessoas em cada 100 mil, ou seja, 1,3 pessoas para cada 2.000 indivíduos. São classificadas de acordo com os quatro principais fatores: incidência, raridade, gravidade e diversidade. No Brasil, estima-se que cerca de treze milhões de pessoas possuem alguma doença rara.</Text>
                    
                    <Text style={estilo.titulo_card}>Quantas existem no Brasil?</Text>
                    <Text style={estilo.texto_card}>São cerca de sete a oito mil tipos e dentre as mais conhecidas estão esclerose múltipla, hemofilia, neuromielite óptica, autismo, acromegalia, entre outras.</Text>
                

                    <Text onPress={()=>navigation.navigate('Information')} style={estilo.link} >
                    Saiba Mais
                    </Text>

                </View>
            </View>
            <SafeAreaView style={{flex: 1}}>
            <View style={estilo.part_doacao}>
                <Text style={estilo.titulo_card}>DOE PELA CAUSA ATRAVÉS DA ASSOCIAÇÃO AFAG</Text>
                <Text style={estilo.texto_doacao}>A{' '}
                <Text style={estilo.hyperlink}onPress={() => {Linking.openURL('https://www.afagbrasil.org.br/afag/');}}>Associação dos Familiares, Amigos e Portadores de Doenças Graves (AFAG)
                </Text>é uma entidade de abrangência nacional, sediada em Campinas, São Paulo. Desde 2005 atua na defesa dos direitos das pessoas acometidas por doenças raras e graves.
                </Text>
                <Text style={estilo.link} onPress={() => {Linking.openURL('https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=BACYGFVNTJCJ6&source=url');}}>Doar</Text>
            </View>

            <View>
                <ImageBackground source={require("../../../assets/fotonoticia.jpg")} style={estilo.linha}>
                <Text style={estilo.titulo}>Linha do Tempo</Text>
                <Text style={estilo.subtitulo_linha}>ALGUMAS DOENÇAS RARAS DESCOBERTAS AO LONGO DA HISTÓRIA</Text>
                <Image style={estilo.img_doenca} source={require("../../../assets/fotonoticia.jpg")}/>
                <Text style={estilo.texto_doenca}>A hemofilia é um distúrbio genético e passado de pai para filho que afeta a coagulação do sangue. Por exemplo: quando machucamos alguma parte do nosso corpo e começa a sangrar, as proteínas (elementos responsáveis pelo crescimento e desenvolvimento de todos os tecidos do corpo) entram em ação para acabar o sangramento.</Text>
                </ImageBackground >
            </View>

            <View>
                <ImageBackground source={require("../../../assets/olho.png")} style={estilo.linha}>
                <Image style={estilo.img_doenca} source={require("../../../assets/olho.png")}/>
                <Text style={estilo.texto_doenca}>Na doença de Wilson, uma rara doença hereditária (passada dos pais para os filhos), o fígado não elimina o excesso de cobre na bile, como faz normalmente, resultando em um acúmulo de cobre (elemento químico de metal) no fígado, causando-lhe danos. O cobre se acumula no fígado, no cérebro, nos olhos e em outros órgãos.</Text>
                </ImageBackground >
            </View>

            <View>
                <ImageBackground source={require("../../../assets/estomago.jpg")} style={estilo.linha}>
                <Image style={estilo.img_doenca} source={require("../../../assets/estomago.jpg")}/>
                <Text style={estilo.texto_doenca}>É uma doença inflamatória crônica que atinge o intestino e os casos mais graves podem apresentar entupimento ou perfurações intestinais. Enfraquecimento, dores abdominais e nas articulações, perda de peso, diarreia com ou sem sangue, lesões na pele, pedra nos rins e na vesícula são alguns dos principais sintomas.</Text>
                </ImageBackground >
            </View>

            <View>
                <ImageBackground source={require("../../../assets/estomago2.jpg")} style={estilo.linha}>
                <Image style={estilo.img_doenca} source={require("../../../assets/estomago2.jpg")}/>
                <Text style={estilo.texto_doenca}>Este é o nome da enfermidade que causa alergia a todos os tipos de comida em seus portadores que, sem um diagnóstico correto, podem enfrentar quadros graves de desnutrição. O primeiro caso de GE foi registrado em 1937 e até hoje não possui um tratamento devido à falta de estudos aprofundados.</Text>
                </ImageBackground >
            </View>

            <View>
                <ImageBackground source={require("../../../assets/medica.jpeg")} style={estilo.linha}>
                <Image style={estilo.img_doenca} source={require("../../../assets/medica.jpeg")}/>
                <Text style={estilo.texto_doenca}>Descoberta em 1970, esta é uma doença rara para qual já foi desenvolvida uma espécie de cura bastante eficaz. A SHCC é uma desordem genética causada por mutações no gene PHOX2B que, por sua vez, desencadeiam uma falha no controle autônomo da respiração secundária. Simplificando, a consequência deste problema é morte por sufocação, como se estivesse afogando.</Text>
                </ImageBackground >
            </View>

            <View>
                <ImageBackground source={require("../../../assets/esqueleto.jpg")} style={estilo.linha}>
                <Image style={estilo.img_doenca} source={require("../../../assets/esqueleto.jpg")}/>
                <Text style={estilo.texto_doenca}>Também conhecida como “síndrome do homem de pedra”, esta doença caracteriza-se pelo enrijecimento de ligamentos, tendões e músculos do portador. Assim, as principais consequências são a paralisação progressiva dos membros e a deformação corpórea.</Text>
                </ImageBackground >
            </View>

            <View style={estilo.part_doacao}>
                <View style={estilo.sobre}>
                    <Image style={estilo.logo} source={require("../../../assets/logobranco.png")} />
                    <Text style={estilo.titulo_sobre}>Sobre</Text>
                </View>
                
                <Text style={estilo.sobre}>Somos um grupo feminino de estudantes da Etec de Guarulhos do ensino técnico em Desenvolvimento de Sistemas, em que para nosso Trabalho de Conclusão de Curso(TCC) criamos uma marca, como um nome de empresa, chamada Valkiria com o projeto Benizi.</Text>

                <View style={estilo.sobre}>
                    <Image style={estilo.link_social} source={require("../../../assets/face.png")}/>
                    <Text style={estilo.link_social} onPress={() => {Linking.openURL('https://www.facebook.com/people/Benizi/100083678111221/');}}>Facebook</Text> 
                    <Image style={estilo.link_social} source={require("../../../assets/Twitter.png")}/> 
                    <Text style={estilo.link_social} onPress={() => {Linking.openURL('https://twitter.com/BeniziValkirias');}}>Twitter</Text>
                    <Image style={estilo.link_social} source={require("../../../assets/linkedin.png")}/> 
                    <Text style={estilo.link_social} onPress={() => {Linking.openURL('https://www.linkedin.com/in/benizi-by-valkirias-300197245/');}}>Linkedin</Text>
                </View>
            </View>

            </SafeAreaView>
               
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#60EFE0",
      alignItems:"center",
      justifyContent:"center",
      textAlign: "center"
    },

    titulo:{
        justifyContent: "center",
        alignItems: "center",
        color: '#FFFFFF',
        fontSize: 50,
        textDecorationStyle: "bold",
        marginTop:30,
        fontWeight: "900",
        marginBottom:10,
        textAlign:"center"
    },

    textos:{
        marginLeft:15,
        marginRight:15,
        fontSize:15,
        color: "#FFFFFF",
        fontWeight: "90",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
    },

    container2:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        textAlign: "center",
        marginTop:20
      },

    img:{
        marginTop:25,
        width:300,
        height:450,
        alignItems: "center",
        alignContent:"center",
        textAlign:"center",
        justifyContent: "center",
        borderRadius: 30,
    },

    card:{
        width: 300,
        height: 550,
        borderRadius: 30,
        backgroundColor: "#ffffff",
        boxShadow: 15,
        boxShadow: "#bebebe",
        boxShadow: -15,
        boxShadow:"#FFFFFF", 
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom:20
    },

    titulo_card:{
        marginTop:20,
        color:"#008B8B",
        fontSize:25,
        fontWeight: "900",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
    },

    texto_card:{
        color:"#008B8B",
        fontSize:16,
        marginLeft:15,
        marginRight:15,
        fontWeight: "90",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
        marginTop:5
    },

    link:{
        marginTop:20,
        color:"#008B8B",
        fontSize:25,
        fontWeight: "900",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
        borderWidth: 3,
        borderColor:"#008B8B",
        marginBottom:20
    },
    
    part_doacao:{
        backgroundColor:"#B4F5EE",
        marginTop:30,
        marginBottom:50,
        width:390,
        flex: 1,
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
    },

    texto_doacao:{
        color:"#008B8B",
        fontSize:16,
        fontWeight: "90",
        marginTop:10,
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
    },

    hyperlink:{
        color:"#008B8B",
        fontSize:16,
        fontWeight: "900",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"center",
    },

    linha:{
        width:390,
        opacity: 0.8,
        display: "flex",
        textAlign: "center",
        justifyContent:"center",
        alignItems:"center",
        alignContent: "center"
    },

    subtitulo_linha:{
        color: "#FFFFFF",
        opacity: 0.7,
        textAlign: "center"
    },

    texto_doenca:{
        marginTop:20,
        color:"#FFFFFF",
        textAlign:"center",
        fontSize:15,
        fontWeight: "900",
        marginBottom:20
    },

    img_doenca:{
        marginTop:70,
        width:250,
        height:180, 
    },

    rodape:{
        marginLeft:20,
        marginRight:20,
        fontSize:15,
        color: "#FFFFFF",
        fontWeight: "900",
        alignContent:"center",
        alignItems:"center",
        justifyContent: "center",
        textAlign:"left",
        marginBottom:25,
        display:"flex"
    },

    logo:{
        width:90,
        height:100,
        display:"flex",
        marginHorizontal: 30,
        marginVertical: 30
    },

    titulo_sobre:{
        justifyContent: "center",
        alignItems: "center",
        color: '#FFFFFF',
        fontSize: 40,
        textDecorationStyle: "bold",
        marginTop:30,
        fontWeight: "900",
        marginBottom:10,
        textAlign:"center"
    },

    sobre:{
        display:"flex",
        flexDirection: "row",
        position: "relative",
        alignItems: "center",
        color:"#FFFFFF",
        fontSize:15,
        fontWeight:"600",
        marginLeft:20,
        marginRight:20,
        textAlign: "center"
    },

    link_social:{
        width:50,
        height:50,
        color: "#FFFFFF",
        marginTop:15,
        textAlign:"center",
        fontSize:11,
        alignContent: "center",
        alignItems: "center"
    }

    
  
  })

 