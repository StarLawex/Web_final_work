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


// 筛选宫殿卡片
let activeFilters = {
  dynasty: '',
  type: '',
  area: ''
};

// 点击标签筛选
function filterPalace(type, value) {
  // 切换标签选中状态
  document.querySelectorAll(`.tag-item`).forEach(item => {
    if (item.onclick && item.onclick.toString().includes(`filterPalace('${type}', '${value}')`)) {
      item.classList.toggle('active');
      // 更新筛选条件
      activeFilters[type] = item.classList.contains('active') ? value : '';
    }
  });

  // 筛选卡片
  document.querySelectorAll('.palace-card').forEach(card => {
    const dynastyMatch = !activeFilters.dynasty || card.dataset.dynasty === activeFilters.dynasty;
    const typeMatch = !activeFilters.type || card.dataset.type === activeFilters.type;
    const areaMatch = !activeFilters.area || card.dataset.area === activeFilters.area;

    card.style.display = (dynastyMatch && typeMatch && areaMatch) ? 'block' : 'none';
  });
}

// 重置筛选
function resetFilter() {
  activeFilters = { dynasty: '', type: '', area: '' };
  document.querySelectorAll('.tag-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.palace-card').forEach(card => card.style.display = 'block');
}

// 卡片点击跳转详情页（给每个卡片绑定跳转）
document.querySelectorAll('.palace-card').forEach(card => {
  const palaceName = card.querySelector('.palace-name').innerText;
  // 按宫殿名映射详情页路径（可自定义）
  const pageMap = {
    '北京故宫': 'palace-detail/故宫.html',
    '大明宫': 'palace-detail/大明宫.html',
    '未央宫': 'palace-detail/未央宫.html',
    '沈阳故宫': 'palace-detail/沈阳故宫.html',
    '承德避暑山庄': 'palace-detail/承德避暑山庄.html',
    '殷墟宫殿宗庙遗址': 'palace-detail/殷墟宫殿宗庙遗址.html',
    '布达拉宫': 'palace-detail/布达拉宫.html'
  };
  card.onclick = () => {
    window.location.href = pageMap[palaceName] || '#';
  };
});


// 详情页切换主图
function changeMainImg(img) {
  const mainImg = document.querySelector('.main-img img');
  mainImg.src = img.src;
  mainImg.alt = img.alt;
}