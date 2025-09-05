// Coding Challenge 02a

productname = "Crate"
costperunit = 9.99
baseprice = 21.43
discountrate = 0.1
salestaxrate = 0.05
fixedmonthlycosts = 1300

discountedPrice = baseprice * (1 - discountrate)
finalPriceWithTax = discountedPrice * (1 + salestaxrate)
profitPerUnit = finalPriceWithTax - costperunit
breakEvenUnits = Math.ceil(fixedmonthlycosts / profitPerUnit)
isProfitablePerUnit = "Yes", profitPerUnit > 0

console.log (productname)
console.log (discountedPrice)
console.log (finalPriceWithTax)
console.log (profitPerUnit)
console.log (breakEvenUnits)
console.log (isProfitablePerUnit)

