CREATE TABLE IF NOT EXISTS pokemon (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    ability VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    small_image_url TEXT NOT NULL,
)

CREATE TABLE IF NOT EXISTS comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_name VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 and 5),
    pokemon_id INT REFERENCES pokemon(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
)

INSERT INTO pokemon (name, type, ability, description, image_url, small_image_url)
VALUES ('Pikachu', 'Electric', 'Static', 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'), 
('Charizard', 'Fire, Flying', 'Blaze', 'If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'),
('Bulbasaur', 'Grass, Poison', 'Overgrow', 'For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'),
('Charmander', 'Fire', 'Blaze', 'The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'),
('Squirtle', 'Water', 'Torrent', 'After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'),
('Gengar', 'Ghost, Poison', 'Cursed Body, Levitate', 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'),
('Mewtwo', 'Psychic', 'Pressure', 'Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'),
('Snorlax', 'Normal', 'Immunity, Thick Fat', 'This gluttonous Pokémon eats constantly, apart from when it’s asleep. It devours nearly 900 pounds of food per day.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'),
('Lapras', 'Water, Ice', 'Water Absorb, Shell Armour', 'It ferries people across the sea on its back. It may sing an enchanting cry if it is in a good mood.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png'),
('Jigglypuff', 'Normal, Fairy', 'Cute Charm, Competitive', 'When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png');

INSERT INTO comments (user_name, comment, rating, pokemon_id)
VALUES ('Gabby', 'Pikachu is the perfect blend of cute and powerful! Always my go-to in battles and never fails to brighten my day!', 5, 1);

SELECT id, name, type, ability, description FROM pokemon;

SELECT id, name, type, ability, description, image_url FROM pokemon WHERE id = 4;

SELECT id, user_name, comment, rating FROM comments WHERE pokemon_id = 1 ORDER BY created_at DESC;

DELETE FROM comments WHERE id = 3;