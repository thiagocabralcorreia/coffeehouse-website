// SliderData Images
import chbanner01 from '../assets/photos/chbanner01.png';
import chbanner02 from '../assets/photos/chbanner02.png';
import chbanner03 from '../assets/photos/chbanner03.png';

// menuSections Images
import menuCoffee from '../assets/photos/menu-coffee.jpg';

export const SliderData = [
    {
        image: chbanner01
    },
    {
        image: chbanner02
    },
    {
        image: chbanner03
    },
]

export const menuSections = [
    {id: 'drinks',
    section: 'Drinks',
    subsections: [
        {type: 'Coffee',
        id: 'coffee',
        image: menuCoffee,
        items: [
                {subtype: 'Espresso',
                ingredients: 'Espresso'
                },
                {subtype: 'Americano',
                ingredients: 'Espresso, Hot Water'
                },
                {subtype: 'Latte',
                ingredients: 'Espresso, Creamy Steamed Milk'
                },
                {subtype: 'Cappuccino',
                ingredients: 'Espresso, Milk Foam'
                },
                {subtype: 'Mocha',
                ingredients: 'Espresso, Steamed Milk, Chocolate'
                },
                {subtype: 'Caramel Macchiato',
                ingredients: 'Espresso, Steamed Milk, Vanilla, Caramel'
                }
            ]
        },
        {type: 'Tea',
        id: 'tea',
        image: menuCoffee,
        items: [
                {subtype: 'English Breakfast Tea',
                ingredients: 'Black Tea'
                },
                {subtype: 'Chai Tea',
                ingredients: 'Black Tea, Cinnamon, Black Pepper'
                },
                {subtype: 'Chai Tea Latte',
                ingredients: 'Black Tea, Cinnamon, Black Pepper, Steamed Milk'
                },
                {subtype: 'Earl Grey Tea',
                ingredients: 'Black Tea, Bergamot essence'
                },
                {subtype: 'Chamomile Mint Tea',
                ingredients: 'Chamomile Tea, Lemongrass, Mint'
                },
                {subtype: 'Green Ginger Tea',
                ingredients: 'Green Tea, Fresh Ginger'
                },
                {subtype: 'Blueberry Green Tea',
                ingredients: 'Green Tea, Lemonade, Blueberry'
                },
            ]
        },
        {type: 'Cold Drinks',
        id: 'cold-drinks',
        image: menuCoffee,
        items: [
                {subtype: 'Cold Brew',
                ingredients: 'Cold Coffee, Ice'
                },
                {subtype: 'Iced Latte',
                ingredients: 'Espresso, Cold Milk, Ice'
                },
                {subtype: 'Iced Mocha',
                ingredients: 'Espresso, Cold Milk, Chocolate, Ice'
                },
                {subtype: 'Iced Vanilla Mocha',
                ingredients: 'Espresso, Cold Milk, Chocolate, Vanilla, Ice'
                },
                {subtype: 'Tropical Tea',
                ingredients: 'Green Tea, Pineapple Notes, Ice'
                },
                {subtype: 'Iced Green Tea Lemonade',
                ingredients: 'Green Tea, Lemonade, Ice'
                },
                {subtype: 'Iced Chai Tea Latte',
                ingredients: 'Black Tea, Cinnamon, Cold Milk, Black Pepper, Ice'
                },
            ]
        }
    ]
    },
    {id: 'food',
    section: 'Food',
    subsections: [
        {type: 'Breakfast & Lunch',
        id: 'breakfast-lunch',
        image: menuCoffee,
        items: [
                {subtype: 'Bacon Sandwich',
                ingredients: 'Bread, Egg, Dutch Cheese, Bacon'
                },
                {subtype: 'Turkey Sandwich',
                ingredients: 'Wheat Bread, Tomato, Smoked Turkey Breast, Pesto'
                },
                {subtype: 'Sausage Sandwich',
                ingredients: 'Bread, Sausage, Egg, Dutch Cheese, Bacon'
                },
                {subtype: 'All Butter Croissant.',
                ingredients: 'Croissant'
                },
                {subtype: 'Almond Croissant',
                ingredients: 'Croissant, Almond Filling, Almond Flakes, Icing Sugar'
                },
                {subtype: 'Avocado Wrap',
                ingredients: 'Whole Grain Tortilla, Tomato, Swiss Cheese, Avocado'
                }
            ]
        },
        {type: 'Snacks & Treats',
        id: 'snacks-treats',
        image: menuCoffee,
        items: [
                {subtype: 'CH Cake',
                ingredients: 'Coffee Cake, Caramel Brown Sugar, Cinnamon Topping'
                },
                {subtype: 'Dutch Stroopwafels',
                ingredients: 'Dutch Caramel Waffles'
                },
                {subtype: 'Cherry Bakewells',
                ingredients: 'Buttery Dough, Cherry Jam, Sweet Fondant'
                },
                {subtype: 'Strawberries Muffin',
                ingredients: 'Muffin, Strawberries, Strawberry Jam'
                },
                {subtype: 'Chocolate Donut',
                ingredients: 'Donut, Chocolate Glaze'
                },
                {subtype: 'Chocolate Cookie',
                ingredients: 'Buttery Cookie, Chocolate Buttons'
                },
            ]
        }
    ]
    }
];