const typeColors = {
  grass: "#78C850",
  poison: "#A040A0",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  bug: "#A8B820",
  normal: "#A8A878",
  flying: "#A890F0",
  ground: "#E0C068",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};
const DetailsScreen = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Nombre */}
      <Text
        style={{
          fontSize: 38,
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {pokemon.name.toUpperCase()} Nº {pokemon.id}
      </Text>

      {/* Imagen */}
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#e8e8e8",
            borderRadius: 20,
            padding: 20,
            width: "90%",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={{
              uri:
                pokemon.sprites.other["official-artwork"]
                  .front_default,
            }}
          />
        </View>
      </View>

      {/* Descripción */}
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            lineHeight: 28,
          }}
        >
          Pokémon número {pokemon.id} de la Pokédex oficial.
        </Text>
      </View>

      {/* Caja azul */}
      <View
        style={{
          backgroundColor: "#39a9db",
          margin: 20,
          borderRadius: 20,
          padding: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Izquierda */}
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Altura
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 30,
              marginTop: 10,
            }}
          >
            {pokemon.height / 10} m
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Peso
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 30,
              marginTop: 10,
            }}
          >
            {pokemon.weight / 10} kg
          </Text>
        </View>

        {/* Derecha */}
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Categoría
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 30,
              marginTop: 10,
            }}
          >
            Pokémon
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Habilidad
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 22,
              marginTop: 10,
            }}
          >
            {pokemon.abilities[0].ability.name}
          </Text>
        </View>
      </View>

      {/* Tipos */}
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            marginBottom: 15,
            fontWeight: "bold",
          }}
        >
          Tipo
        </Text>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          {pokemon.types.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor:
                  typeColors[item.type.name] || "#999",
                paddingVertical: 12,
                paddingHorizontal: 35,
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {item.type.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Estadísticas Base
        </Text>

        {pokemon.stats.map((stat, index) => (
          <View
            key={index}
            style={{
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              {stat.stat.name}: {stat.base_stat}
            </Text>

            <View
              style={{
                height: 12,
                backgroundColor: "#ddd",
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: `${Math.min(
                    stat.base_stat,
                    100
                  )}%`,
                  height: 12,
                  backgroundColor: "#39a9db",
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};