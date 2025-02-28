const express = require('express');
const app = express();
const cors = require('cors');

let PORT = process.env.PORT || 5555;

app.listen(PORT, (() => {
    console.log("Server started at port", PORT);
}));

app.use(cors({
    origin: "*",
}));

let str = [
    "Do what you can, with what you have, where you are - Theodore Roosevelt", "It always seems impossible until it's done - Nelson Mandela", "Act as if what you do makes a difference. It does - William James", "The best way to predict the future is to create it - Peter Drucker", "Dream big and dare to fail - Norman Vaughan", "Don’t wait for opportunity. Create it - Unknown", "Go confidently in the direction of your dreams. Live the life you have imagined - Henry David Thoreau", "The only way to do great work is to love what you do - Steve Jobs", "Opportunities don't happen. You create them - Chris Grosser", "Doubt kills more dreams than failure ever will - Suzy Kassem", "Work hard in silence, let success make the noise - Frank Ocean", "Success is not the key to happiness. Happiness is the key to success - Albert Schweitzer", "Do what you love and success will follow. Passion is the fuel behind a successful career - Meg Whitman", "The road to success and the road to failure are almost exactly the same - Colin R. Davis", "It does not matter how slowly you go as long as you do not stop - Confucius", "Success is not in what you have, but who you are - Bo Bennett", "All our dreams can come true if we have the courage to pursue them - Walt Disney", "Great things never come from comfort zones - Unknown", "The secret of getting ahead is getting started - Mark Twain", "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart - Roy T. Bennett", "Life isn’t about finding yourself. Life is about creating yourself - George Bernard Shaw", "Happiness is not something ready-made. It comes from your own actions - Dalai Lama", "Your time is limited, so don’t waste it living someone else’s life - Steve Jobs", "To live is the rarest thing in the world. Most people exist, that is all - Oscar Wilde", "You only live once, but if you do it right, once is enough - Mae West", "Be yourself; everyone else is already taken - Oscar Wilde", "Enjoy the little things, for one day you may look back and realize they were the big things - Robert Brault", "Not how long, but how well you have lived is the main thing - Seneca", "Life is 10% what happens to us and 90% how we react to it - Charles R. Swindoll", "Turn your wounds into wisdom - Oprah Winfrey", "It’s not whether you get knocked down, it’s whether you get up - Vince Lombardi", "Do what is right, not what is easy nor what is popular - Roy T. Bennett", "A wise man can learn more from a foolish question than a fool can learn from a wise answer - Bruce Lee", "The mind is everything. What you think you become - Buddha", "Difficulties in life are intended to make us better, not bitter - Dan Reeves", "Don't let yesterday take up too much of today - Will Rogers", "Stay away from negative people. They have a problem for every solution - Albert Einstein", "Be not afraid of growing slowly, be afraid only of standing still - Chinese Proverb", "Life is really simple, but we insist on making it complicated - Confucius", "We cannot solve our problems with the same thinking we used when we created them - Albert Einstein", "Happiness depends upon ourselves - Aristotle", "If you want to fly, give up everything that weighs you down - Toni Morrison", "The purpose of our lives is to be happy - Dalai Lama", "The best thing to hold onto in life is each other - Audrey Hepburn", "Do more things that make you forget to check your phone - Unknown", "To love and be loved is to feel the sun from both sides - David Viscott", "Being deeply loved by someone gives you strength while loving someone deeply gives you courage - Lao Tzu", "Love all, trust a few, do wrong to none - William Shakespeare", "Happiness is not having what you want, but wanting what you have - Unknown", "Kindness is a language which the deaf can hear and the blind can see - Mark Twain"

]


app.get("/", (req, res) => {
    res.send("Welcome to my html page");
});

app.get("/data", (req, res) => {
    let rnd = str[Math.floor(Math.random() * str.length)];
    res.send(`${rnd}`);
})