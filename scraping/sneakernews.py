from selenium import webdriver
driver=webdriver.Chrome('./chromedriver' )
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://footsell.com/g2/bbs/board.php?bo_table=sneakernews')
# naver 페이지 열기

table= driver.find_element_by_xpath('//*[@id="list_table"]')
rows=table.find_elements_by_class_name('box_shadow_3')

for index, row in enumerate(rows): 
    sneaker=row.find_elements_by_tag_name('div')[2]
    title=sneaker.find_element_by_class_name('wz_subject')
    print(title.text)


driver.quit()