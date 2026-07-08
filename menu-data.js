window.LOUNGE_MENU = {
    // NOTE: fb-video-01.mp4, fb-video-02.mp4 and fb-video-04.mp4 contain audio only
    // (no video stream) — they were likely saved incorrectly from Facebook and will
    // always render as a blank/black box in a <video> tag. They're excluded below
    // until re-exported with an actual video track. fb-video-03.mp4 is a real video.
    facebookPosts: [
        { type: "video", src: "images/facebook-videos/fb-video-03.mp4", poster: "images/facebook-videos/posters/fb-video-03-poster.jpg", alt: "What's new at The Lounge video", caption: "A quick look at what is new at The Lounge." },
        { type: "image", src: "images/facebook-posts/fb-post-01.jpg", alt: "The Lounge Facebook update", caption: "Fresh cafe plates from the Lounge kitchen." },
        { type: "image", src: "images/facebook-posts/fb-post-02.jpg", alt: "The Lounge Facebook update", caption: "Coffee and calm mornings in Logan Reserve." },
        { type: "image", src: "images/facebook-posts/fb-post-03.jpg", alt: "The Lounge Facebook update", caption: "Brunch specials, plated and ready." },
        { type: "image", src: "images/facebook-posts/fb-post-04.jpg", alt: "The Lounge Facebook update", caption: "Sweet cabinet moments for the afternoon." },
        { type: "image", src: "images/facebook-posts/fb-post-05.jpg", alt: "The Lounge Facebook update", caption: "Local lunch favourites from the kitchen." },
        { type: "image", src: "images/facebook-posts/fb-post-06.jpg", alt: "The Lounge Facebook update", caption: "Fresh drinks and bright cafe colours." },
        { type: "image", src: "images/facebook-posts/fb-post-07.jpg", alt: "The Lounge Facebook update", caption: "Breakfast plates made for slow mornings." },
        { type: "image", src: "images/facebook-posts/fb-post-08.jpg", alt: "The Lounge Facebook update", caption: "Lounge specials from the latest feed." },
        { type: "image", src: "images/facebook-posts/fb-post-09.jpg", alt: "The Lounge Facebook update", caption: "Matcha, coffee and easy catch-ups." },
        { type: "image", src: "images/facebook-posts/fb-post-10.jpg", alt: "The Lounge Facebook update", caption: "Comfort food from the cafe counter." },
        { type: "image", src: "images/facebook-posts/fb-post-11.jpg", alt: "The Lounge Facebook update", caption: "Weekend brunch energy at The Lounge." },
        { type: "image", src: "images/facebook-posts/fb-post-12.jpg", alt: "The Lounge Facebook update", caption: "House-made treats and coffee pairings." },
        { type: "image", src: "images/facebook-posts/fb-post-13.jpg", alt: "The Lounge Facebook update", caption: "Fresh bowls, greens and lighter bites." },
        { type: "image", src: "images/facebook-posts/fb-post-14.jpg", alt: "The Lounge Facebook update", caption: "Golden toasties and cafe lunch plates." },
        { type: "image", src: "images/facebook-posts/fb-post-15.jpg", alt: "The Lounge Facebook update", caption: "Desserts, slices and small sweet wins." },
        { type: "image", src: "images/facebook-posts/fb-post-16.jpg", alt: "The Lounge Facebook update", caption: "Kitchen specials shared from Facebook." },
        { type: "image", src: "images/facebook-posts/fb-post-17.jpg", alt: "The Lounge Facebook update", caption: "Cold drinks and colourful cafe refreshers." },
        { type: "image", src: "images/facebook-posts/fb-post-18.jpg", alt: "The Lounge Facebook update", caption: "Breakfast favourites with a Lounge twist." },
        { type: "image", src: "images/facebook-posts/fb-post-19.jpg", alt: "The Lounge Facebook update", caption: "Burgers, chips and hearty lunch ideas." },
        { type: "image", src: "images/facebook-posts/fb-post-20.jpg", alt: "The Lounge Facebook update", caption: "Freshly posted cafe moments." },
        { type: "image", src: "images/facebook-posts/fb-post-21.jpg", alt: "The Lounge Facebook update", caption: "Coffee runs and catch-up tables." },
        { type: "image", src: "images/facebook-posts/fb-post-22.jpg", alt: "The Lounge Facebook update", caption: "Sweets from the latest updates." },
        { type: "image", src: "images/facebook-posts/fb-post-23.jpg", alt: "The Lounge Facebook update", caption: "Seasonal plates from the Lounge team." },
        { type: "image", src: "images/facebook-posts/fb-post-24.jpg", alt: "The Lounge Facebook update", caption: "Fresh lunch ideas for local regulars." },
        { type: "image", src: "images/facebook-posts/fb-post-25.jpg", alt: "The Lounge Facebook update", caption: "Brunch, coffee and Logan Reserve hospitality." },
        { type: "image", src: "images/facebook-posts/fb-post-26.jpg", alt: "The Lounge Facebook update", caption: "Cafe specials worth checking first." },
        { type: "image", src: "images/facebook-posts/fb-post-27.jpg", alt: "The Lounge Facebook update", caption: "Sweet and savoury moments from the feed." }
    ],
    categories: [
        {
            slug: "bread",
            icon: "fa-egg",
            image: "images/menu/menu-breakfast.jpg",
            name: "Breakfast & Brunch",
            intro: "Eggs Benny on a croissant, buttermilk pancakes, banana bread and easy morning favourites.",
            items: [["Eggs Benny on a Croissant", "Ask in store"], ["Buttermilk Pancakes", "Ask in store"], ["Banana Bread", "Ask in store"], ["Bacon & Egg Roll", "Ask in store"], ["Eggs Your Way", "Ask in store"], ["Big Breakfast", "Ask in store"]]
        },
        {
            slug: "coffee",
            icon: "fa-mug-hot",
            image: "images/menu/menu-coffee.jpg",
            name: "Coffee",
            intro: "Smooth cafe coffee for the morning run, brunch table or takeaway cup.",
            items: [["Cappuccino", "Ask in store"], ["Latte", "Ask in store"], ["Flat White", "Ask in store"], ["Long Black", "Ask in store"], ["Mocha", "Ask in store"], ["Iced Latte", "Ask in store"]]
        },
        {
            slug: "drinks",
            icon: "fa-leaf",
            image: "images/menu/menu-matcha.jpg",
            name: "Matcha & Cold Drinks",
            intro: "Matcha, iced drinks, fresh juices and refreshing cafe favourites.",
            items: [["Matcha Latte", "Ask in store"], ["Iced Matcha", "Ask in store"], ["Fresh Juice", "Ask in store"], ["Iced Coffee", "Ask in store"], ["Smoothies", "Ask in store"]]
        },
        {
            slug: "banh-mi",
            icon: "fa-burger",
            image: "images/menu/menu-burgers.jpg",
            name: "Burgers & Hot Plates",
            intro: "Hot lunch plates and specials, including the posted fish burger with chips.",
            items: [["Fish Burger Special", "$17.50"], ["Chicken Burger", "Ask in store"], ["Chicken Schnitzel", "Ask in store"], ["Fish & Chips", "Ask in store"], ["Hot Chips", "Ask in store"], ["Lunch Plate Specials", "Ask in store"]]
        },
        {
            slug: "wraps-focaccia",
            icon: "fa-utensils",
            image: "images/menu/menu-wraps.jpg",
            name: "Wraps & Sandwiches",
            intro: "Fresh cafe wraps, toasties and sandwiches for quick lunches or takeaway.",
            items: [["Grilled Chicken Wrap", "Ask in store"], ["Chicken & Avocado Wrap", "Ask in store"], ["Ham & Cheese Toastie", "Ask in store"], ["Cafe Sandwiches", "Ask in store"], ["Turkish Toastie", "Ask in store"]]
        },
        {
            slug: "vermicelli-salad-bowls",
            icon: "fa-bowl-food",
            image: "images/menu/menu-salads.jpg",
            name: "Salads & Bowls",
            intro: "Fresh salads, lighter bowls and generous cafe plates.",
            items: [["Noodle Salad", "Ask in store"], ["Chicken Salad", "Ask in store"], ["Garden Salad", "Ask in store"], ["Protein Bowl", "Ask in store"], ["Gluten-Free Friendly Options", "Ask in store"]]
        },
        {
            slug: "rice-paper-rolls",
            icon: "fa-seedling",
            image: "images/menu/menu-fresh.jpg",
            name: "Fresh & Healthy",
            intro: "Quick bites, small plates and lighter options for breakfast or lunch.",
            items: [["Small Plates", "Ask in store"], ["Healthy Options", "Ask in store"], ["Light Lunch", "Ask in store"], ["Gluten-Free Options", "Ask in store"], ["Outdoor Table Snacks", "Ask in store"]]
        },
        {
            slug: "salad-rolls",
            icon: "fa-glass-water",
            image: "images/menu/menu-juices.jpg",
            name: "Juices & Smoothies",
            intro: "Fresh juices, colourful cold drinks and brunch-friendly refreshers.",
            items: [["Freshly Squeezed Juice", "Ask in store"], ["Orange Juice", "Ask in store"], ["Green Juice", "Ask in store"], ["Smoothies", "Ask in store"], ["Cold Soft Drinks", "Ask in store"]]
        },
        {
            slug: "sandwiches",
            icon: "fa-bread-slice",
            image: "images/menu/menu-toasties.jpg",
            name: "Toasties",
            intro: "Warm, simple cafe toasties and easy all-day bites.",
            items: [["Ham & Cheese Toastie", "Ask in store"], ["Chicken Toastie", "Ask in store"], ["Cheese Toastie", "Ask in store"], ["Sourdough Toastie", "Ask in store"]]
        },
        {
            slug: "hot-food",
            icon: "fa-fire-flame-curved",
            image: "images/fish-burger.jpg",
            name: "Lunch Specials",
            intro: "Rotating Instagram and chalkboard specials, hot lunches and comfort plates.",
            items: [["Chalkboard Special", "Ask in store"], ["Fish Burger", "$17.50"], ["Chicken Wrap Plate", "Ask in store"], ["Cafe Lunch Special", "Ask in store"], ["Chips & Salad", "Ask in store"]]
        },
        {
            slug: "slices",
            icon: "fa-cookie-bite",
            image: "images/menu/menu-sweets.jpg",
            name: "Sweets & Dessert",
            intro: "Dessert plates, cakes, banana bread and treats from the cabinet.",
            items: [["Dessert Special", "Ask in store"], ["Banana Bread", "Ask in store"], ["Cakes", "Ask in store"], ["Dessert Cabinet", "Ask in store"], ["Sweet Treats", "Ask in store"]]
        },
        {
            slug: "cakes",
            icon: "fa-child-reaching",
            image: "images/menu/menu-breakfast.jpg",
            name: "Kids & Family",
            intro: "Family-friendly cafe picks, kids options and relaxed seating for groups.",
            items: [["Kids Menu", "Ask in store"], ["Kids Pancakes", "Ask in store"], ["Small Chips", "Ask in store"], ["Family Brunch", "Ask in store"], ["Group Tables", "Ask in store"]]
        }
    ]
};
