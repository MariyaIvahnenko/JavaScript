function checkProbabilityTheory(count) {
    let evenCount =0;
    let oddCount = 0;

    for (let i = 0; i <= count; i++ ) {
        const randomNumber = Math.floor( Math.random() * (1000 - 100 + 1) + 100);

        if (randomNumber % 2 === 0 ) {
            evenCount++;
         } else {
            oddCount++;
         }

        }
        const evenPersent = (evenCount/count) * 100;
        const oddPersent = (oddCount/count) * 100;


        return {
            evenCount,
            oddCount,
            evenPersent,
            oddPersent,
            isComparison: Math.abs(evenPersent - 50) < 5 && Math.abs(oddPersent - 50) < 5,
            isComparisonResult: oddCount > evenCount
        } 
        /* isComparison - перевірка чи близькі наші значення парних та не парних чисел до 50%;
        isComparisonResult - порівняння відсодкового значення між парними та не парними, 
        якщо кількість непарних більше парних отримаємо - true
        якщо кількість парних чисел буде більшою - false */
        


}
    
const result = checkProbabilityTheory(666)
console.log(result)