'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('menus',
    [
      {
        restaurant_id: 1,
        name: 'Prato simples',
        description: 'Carne assada com molho, legumes e batatas fritas ',
        price: 22.00,
        image: 'https://img.freepik.com/free-photo/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table_181624-35847.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Suco de laranja',
        description: 'Laranja, água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 1,
        name: 'Prato simples 2',
        description: 'Arroz, salada de tomate com alface, ovo cozido, farofa e feijão',
        price: 20.00,
        image: 'https://img.freepik.com/free-photo/high-angle-delicious-brazilian-food-composition_23-2148739223.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Macarrão com almôndegas',
        description: 'macarrão penne, molho de tomate, manjericão e almôndegas',
        price: 20.00,
        image: 'https://img.freepik.com/free-photo/penne-pasta-with-meatballs-tomato-sauce-white-bowl_2829-7663.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Prato simples 3',
        description: 'Frango ao molho de tomate com salsinha, arroz',
        price: 22.00,
        image:'https://img.freepik.com/free-photo/delicious-brazilian-dish-top-view_23-2148875275.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Macarronada',
        description: 'Macarrão estilo conchas com cogumelos, abobrinha e molho de tomate',
        price: 22.00,
        image: 'https://img.freepik.com/free-photo/italian-pasta-shells-with-mushrooms-zucchini-tomato-sauce_2829-10882.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Prato simples 4',
        description: 'Pedaços de filé de frango com cogumelos ao molho de tomate com brócolis cozido e arroz.',
        price: 25.00,
        image: 'https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Feijoada da casa',
        description: 'Feijoada completa',
        price: 30.00,
        image: 'https://img.freepik.com/free-photo/delicious-brazilian-food-arrangement-top-view_23-2148875291.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 1,
        name: 'Água',
        description: '500ml',
        price: 2.50,
        image: 'https://img.freepik.com/free-psd/fresh-water-bottle-mockup_358694-279.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 1,
        name: 'Refrigerante',
        description: 'Coca-cola, Fanta laranja, Sprite, Guaraná Antarctica, 500ml',
        price: 3.5,
        image: 'https://st3.depositphotos.com/1063437/16054/i/1600/depositphotos_160546204-stock-photo-bottles-of-assorted-global-soft.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 1,
        name: 'Chop',
        description: 'Chop, 500ml',
        price: 8.00,
        image: 'https://img.freepik.com/free-psd/product-beer-bar-mockup_23-2149225283.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 1,
        name: 'Suco de limão',
        description: 'Limão e água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/fresh-lime-drinks-macro-shot_53876-42483.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 2,
        name: 'Macarrão ao molho Pesto',
        description: 'Macarrão penne com molho pesto, abobrinha, ervilhas verdes e manjericão',
        price: 22.00,
        image: 'https://img.freepik.com/free-photo/penne-pasta-with-pesto-sauce-zucchini-green-peas-basil-italian-food-top-view-flat-lay_2829-19577.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Suco de laranja',
        description: 'Laranja, água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 2,
        name: 'Macarrão com carne moída',
        description: 'Macarrão penne em molho de tomate com carne, tomate decorado com brotos de ervilha',
        price: 18.00,
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-meat-tomatoes-decorated-with-pea-sprouts-dark-table_2829-3411.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Pizza Vegetariana',
        description: 'Pizza vegetariana com abobrinha, tomate, pimentão e cogumelos',
        price: 30.00,
        image: 'https://img.freepik.com/free-photo/vegetarian-pizza-with-zucchini-tomato-peppers-mushrooms-wooden-table_123827-21877.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Pizza de salame',
        description: 'Pizza recheada com tomate, salame e azeitonas',
        price: 35.00,
        image:'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Lasanha a Bolonhesa',
        description: 'Molho branco, carne moída, tomate, queijo parmesão, mussarela',
        price: 36.00,
        image: 'https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-11251.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Spaguetti com bacon',
        description: 'Espaguete com bacon, cogumelos e massa',
        price: 25.00,
        image: 'https://img.freepik.com/free-photo/bacon-spaghetti-mushrooms-pasta_1417-169.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Nhoque Rústico',
        description: 'Batata inglesa, sal, tomates, alho e manjericão',
        price: 25.00,
        image: 'https://img.freepik.com/free-photo/gnocchi-pasta-rustic-style-italian-cuisine-vegetarian-vegetable-pasta-cooking-lunch-gourmet-dish-top-view_2829-17219.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 2,
        name: 'Água',
        description: '500ml',
        price: 2.50,
        image: 'https://img.freepik.com/free-psd/fresh-water-bottle-mockup_358694-279.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 2,
        name: 'Refrigerante',
        description: 'Coca-cola, Fanta laranja, Sprite, Guaraná Antarctica, 500ml',
        price: 3.5,
        image: 'https://st3.depositphotos.com/1063437/16054/i/1600/depositphotos_160546204-stock-photo-bottles-of-assorted-global-soft.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 2,
        name: 'Chop',
        description: 'Chop, 500ml',
        price: 8.00,
        image: 'https://img.freepik.com/free-psd/product-beer-bar-mockup_23-2149225283.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 2,
        name: 'Suco de limão',
        description: 'Limão e água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/fresh-lime-drinks-macro-shot_53876-42483.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 3,
        name: 'Refrigerante',
        description: 'Coca-cola, Fanta laranja, Sprite, Guaraná Antarctica, 500ml',
        price: 3.5,
        image: 'https://st3.depositphotos.com/1063437/16054/i/1600/depositphotos_160546204-stock-photo-bottles-of-assorted-global-soft.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 3,
        name: 'Suco de laranja',
        description: 'Laranja, água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 3,
        name: 'Tortilla',
        description: 'Tortilla envolvida com falafel e salada fresca de alface, tomate, cebola e cebolinha',
        price: 15.00,
        image: 'https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Salada Dietética',
        description: 'Brócolis, cogumelos, espinafre e quinoa',
        price: 20.00,
        image: 'https://img.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Salada Grega',
        description: 'Salada de pepino, tomate, pimenta, alface, cebola roxa, queijo feta, azeitonas e azeite de oliva',
        price: '22.00',
        image:'https://img.freepik.com/free-photo/classic-greek-salad-fresh-vegetables-cucumber-tomato-sweet-pepper-lettuce-red-onion-feta-cheese-olives-with-olive-oil-healthy-food-top-view_1150-44877.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Macarronada',
        description: 'Macarrão estilo conchas com cogumelos, abobrinha e molho de tomate',
        price: 22.00,
        image: 'https://img.freepik.com/free-photo/italian-pasta-shells-with-mushrooms-zucchini-tomato-sauce_2829-10882.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Salada do buda',
        description: 'Quinoa, cogumelos, alface, repolho roxo, espinafre, pepino, tomates',
        price: 25.00,
        image: 'https://img.freepik.com/free-photo/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-buddha-bowl_127032-1989.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Nhoque Rústico',
        description: 'Batata inglesa, farinha de trigo, sal, tomates, alho e manjericão',
        price: 25.00,
        image: 'https://img.freepik.com/free-photo/gnocchi-pasta-rustic-style-italian-cuisine-vegetarian-vegetable-pasta-cooking-lunch-gourmet-dish-top-view_2829-17219.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Água',
        description: '500ml',
        price: 2.50,
        image: 'https://img.freepik.com/free-psd/fresh-water-bottle-mockup_358694-279.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 3,
        name: 'Prato com curry',
        description: 'Curry, tofu, tomate, ervilha, brocolis, cenoura, pimentão',
        price: 32.00,
        image: 'https://img.freepik.com/free-photo/vegan-curry-with-tofu-vegetables_661915-287.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 3,
        name: 'Chop',
        description: 'Chop, 500ml',
        price: 8.00,
        image: 'https://img.freepik.com/free-psd/product-beer-bar-mockup_23-2149225283.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 3,
        name: 'Suco de limão',
        description: 'Limão e água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/fresh-lime-drinks-macro-shot_53876-42483.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 4,
        name: 'Refrigerante',
        description: 'Coca-cola, Fanta laranja, Sprite, Guaraná Antarctica, 500ml',
        price: 3.5,
        image: 'https://st3.depositphotos.com/1063437/16054/i/1600/depositphotos_160546204-stock-photo-bottles-of-assorted-global-soft.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 4,
        name: 'Suco de laranja',
        description: 'Laranja, água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 4,
        name: 'Hot Roll',
        description: '6 unidades de sushi rolls de salmão',
        price: 15.00,
        image: 'https://img.freepik.com/free-photo/side-view-fried-sushi-rolls-with-wasabi-ginger-stand_141793-13000.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Temaki salmão',
        description: 'Salmão, cream cheese e molho taré',
        price: 18.00,
        image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2008/05/temaki_salmao.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Niguiri',
        description: '4 unidades de bolinho de arroz coberto com uma fatia de salmão',
        price: 15.00,
        image:'https://st.depositphotos.com/2066681/3023/i/950/depositphotos_30238913-stock-photo-japanese-food-salmon-niguiri.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Sashimi',
        description: '5 unidades cru ou flambado',
        price: 15.00,
        image: 'https://st.depositphotos.com/1681595/3597/i/950/depositphotos_35974791-stock-photo-sashimi.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Uramaki Filadelfia',
        description: '8 unidades de sushi invertido (arroz por fora), recheado com salmão, creeam cheese e cebolinha',
        price: 15.00,
        image: 'https://static3.depositphotos.com/1001099/126/i/950/depositphotos_1260281-stock-photo-sushi-japonese-food-on-a.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Hossomaki Kani',
        description: '8 unidades de sushi (envolto com alga) recheado com kani',
        price: 12.00,
        image: 'https://st2.depositphotos.com/2066681/8358/i/950/depositphotos_83581250-stock-photo-hossomaki-sushi.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Água',
        description: '500ml',
        price: 2.50,
        image: 'https://img.freepik.com/free-psd/fresh-water-bottle-mockup_358694-279.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 4,
        name: 'Macarrão Ramen',
        description: 'Macarrão Ramen com ovos, tofu e cogumelos',
        price: 25.00,
        image: 'https://st2.depositphotos.com/2716431/10589/i/950/depositphotos_105897514-stock-photo-ramen-noodles-with-eggs-tofu.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 4,
        name: 'Chop',
        description: 'Chop, 500ml',
        price: 8.00,
        image: 'https://img.freepik.com/free-psd/product-beer-bar-mockup_23-2149225283.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 4,
        name: 'Suco de limão',
        description: 'Limão e água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/fresh-lime-drinks-macro-shot_53876-42483.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 5,
        name: 'Refrigerante',
        description: 'Coca-cola, Fanta laranja, Sprite, Guaraná Antarctica, 500ml',
        price: 3.5,
        image: 'https://st3.depositphotos.com/1063437/16054/i/1600/depositphotos_160546204-stock-photo-bottles-of-assorted-global-soft.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 5,
        name: 'Suco de laranja',
        description: 'Laranja, água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 5,
        name: 'Porção de Batata frita',
        description: 'Porção de batata frita',
        price: 15.00,
        image: 'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Porção de coxinhas',
        description: '5 Coxinhas de frango com catupiry',
        price: 20.00,
        image: 'https://img.freepik.com/free-photo/coxinha-brazilian-snack-with-bar-space_306105-705.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Porção de tiras de frango frito',
        description: 'Frango frito empanado crocante',
        price: 24.00,
        image:'https://img.freepik.com/free-photo/crispy-fried-chicken-middle-mixed-color-background_140725-114759.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Porção de linguiça',
        description: 'Porção de linguiça toscana grelhada',
        price: 22.00,
        image: 'https://st.depositphotos.com/1003814/2079/i/950/depositphotos_20795541-stock-photo-grilled-sausages-french-fries-and.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Porção de pastel',
        description: '6 Pastéis de carne e/ou queijo',
        price: 25.00,
        image: 'https://st2.depositphotos.com/4366637/12288/i/950/depositphotos_122889926-stock-photo-brazilian-snack-meat-pastry-with.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Hamburguer de bacon',
        description: 'Pão, hamburguer, bacon, queijo, tomate ealface',
        price: 21.00,
        image: 'https://st2.depositphotos.com/3957801/5642/i/950/depositphotos_56423065-stock-photo-bacon-burger.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Água',
        description: '500ml',
        price: 2.50,
        image: 'https://img.freepik.com/free-psd/fresh-water-bottle-mockup_358694-279.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 5,
        name: 'Porção de torresmo',
        description: 'Carne de porco frita cortada em tiras',
        price: 27.00,
        image: 'https://st2.depositphotos.com/4687049/6974/i/950/depositphotos_69746559-stock-photo-fried-pork-rinds.jpg',
        category: 'refeição',
      },
      {
        restaurant_id: 5,
        name: 'Chop',
        description: 'Chop, 500ml',
        price: 8.00,
        image: 'https://img.freepik.com/free-psd/product-beer-bar-mockup_23-2149225283.jpg',
        category: 'bebida',
      },
      {
        restaurant_id: 5,
        name: 'Suco de limão',
        description: 'Limão e água',
        price: 7.00,
        image: 'https://img.freepik.com/free-photo/fresh-lime-drinks-macro-shot_53876-42483.jpg',
        category: 'bebida',
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('menus', null, {}),
};