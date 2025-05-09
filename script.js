document.getElementById('getKeyBtn').addEventListener('click', function() {
    document.getElementById('confirmBox').classList.remove('hidden');
});

document.getElementById('confirmBtn').addEventListener('click', function() {
    const generatedKey = `ZeroCheat-${Math.random().toString(36).substr(2, 6)}`;
    document.getElementById('generatedKey').textContent = generatedKey;
    document.getElementById('keyBox').classList.remove('hidden');
    document.getElementById('confirmBox').classList.add('hidden');

    // Lưu mã vào localStorage (để kiểm tra sau)
    localStorage.setItem('generatedKey', generatedKey);
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('confirmBox').classList.add('hidden');
});

// Sao chép mã vào clipboard
document.getElementById('copyBtn').addEventListener('click', function() {
    const key = document.getElementById('generatedKey').textContent;
    navigator.clipboard.writeText(key).then(() => {
        alert('Mã đã được sao chép!');
    });
});