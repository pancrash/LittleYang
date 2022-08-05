export default {
  pages: [
    'pages/first/index',
    'pages/second/index',
    'pages/third/index',
    'pages/fourth/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小杨同学',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#BBBDC9',
    selectedColor: '#2F9BFE',
    borderStyle: 'white',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/first/index',
        iconPath: 'assets/first.png',
        selectedIconPath: 'assets/first_colored.png',
      },
      {
        pagePath: 'pages/second/index',
        iconPath: 'assets/second.png',
        selectedIconPath: 'assets/second_colored.png',
      },
      {
        pagePath: 'pages/third/index',
        iconPath: 'assets/third.png',
        selectedIconPath: 'assets/third_colored.png',
      },
      {
        pagePath: 'pages/fourth/index',
        iconPath: 'assets/fourth.png',
        selectedIconPath: 'assets/fourth_colored.png',
      },
    ],
  },
  cloud:true,
}
