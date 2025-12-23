// 登录界面标签切换
function switchTab(type) {
    // 隐藏所有表单
    document.querySelectorAll('.login-form').forEach(form => {
        form.classList.remove('active');
    });
    // 移除所有标签激活态
    document.querySelectorAll('.login-tab-item').forEach(item => {
        item.classList.remove('active');
    });
    // 激活选中的标签和表单
    document.getElementById(`${type}-form`).classList.add('active');
    event.target.classList.add('active');
}

// 游客登录逻辑（可扩展：存储游客标识）
document.querySelector('.tourist-btn')?.addEventListener('click', () => {
    // 模拟游客登录，跳转到三分区界面
    window.location.href = 'main.html';
});