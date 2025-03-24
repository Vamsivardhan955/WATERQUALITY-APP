function checkWaterQuality() {
    const parameters = [
        { name: "pH", value: parseFloat(document.getElementById('ph').value), min: 6.5, max: 8.5, fix: "Add baking soda for low pH or lemon juice for high pH." },
        { name: "Hardness", value: parseFloat(document.getElementById('hardness').value), min: 0, max: 300, fix: "Use a water softener for high hardness." },
        { name: "Solids", value: parseFloat(document.getElementById('solids').value), min: 0, max: 500, fix: "Use filtration for high solid content." },
        { name: "Dissolved Oxygen", value: parseFloat(document.getElementById('dissolvedOxygen').value), min: 5, max: 14, fix: "Increase aeration or use oxygenation techniques." },
        { name: "Nitrate", value: parseFloat(document.getElementById('nitrate').value), min: 0, max: 10, fix: "Use ion exchange or reverse osmosis for high nitrates." },
        { name: "Turbidity", value: parseFloat(document.getElementById('turbidity').value), min: 0, max: 5, fix: "Use sedimentation or filtration to reduce turbidity." },
        { name: "Chlorine", value: parseFloat(document.getElementById('chlorine').value), min: 0.2, max: 4, fix: "Adjust chlorine dosing or use activated carbon filtration." },
        { name: "Fluoride", value: parseFloat(document.getElementById('fluoride').value), min: 0.7, max: 1.5, fix: "Use reverse osmosis for high fluoride levels." }
    ];

    let result = "";
    let isSuitable = true;

    parameters.forEach(param => {
        if (param.value < param.min || param.value > param.max) {
            result += `❌ Unsuitable: ${param.name} (${param.value}) - ${param.fix}\n`;
            isSuitable = false;
        } else {
            result += `✅ Suitable: ${param.name} (${param.value}) is within safe limits.\n`;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.className = `result ${isSuitable ? 'suitable' : 'unsuitable'}`;
    resultDiv.textContent = result.trim();
}
