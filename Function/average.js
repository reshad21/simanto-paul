
// একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

const numbers = [1, 2, 3, 4, 5];

function averageOfarray(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    let result = sum / numbers.length;
    return result;
}
let average = averageOfarray(numbers);
console.log(average);

