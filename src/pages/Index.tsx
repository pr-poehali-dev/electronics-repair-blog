import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Smartphone',
      title: 'Ремонт смартфонов',
      price: 'от 1 500 ₽',
      description: 'Замена экранов, аккумуляторов, камер'
    },
    {
      icon: 'Laptop',
      title: 'Ремонт ноутбуков',
      price: 'от 2 000 ₽',
      description: 'Диагностика, чистка, замена комплектующих'
    },
    {
      icon: 'Tv',
      title: 'Ремонт телевизоров',
      price: 'от 3 000 ₽',
      description: 'Ремонт матриц, блоков питания'
    },
    {
      icon: 'Microwave',
      title: 'Бытовая техника',
      price: 'от 1 000 ₽',
      description: 'Холодильники, стиральные машины'
    }
  ];

  const priceList = [
    { service: 'Диагностика любого устройства', price: 'Бесплатно' },
    { service: 'Замена экрана смартфона', price: '1 500 - 5 000 ₽' },
    { service: 'Замена аккумулятора смартфона', price: '1 000 - 3 000 ₽' },
    { service: 'Чистка ноутбука от пыли', price: '1 500 ₽' },
    { service: 'Замена термопасты', price: '800 ₽' },
    { service: 'Ремонт разъема зарядки', price: '1 200 - 2 500 ₽' },
    { service: 'Восстановление после воды', price: 'от 2 000 ₽' },
    { service: 'Замена матрицы ноутбука', price: 'от 4 000 ₽' },
    { service: 'Установка SSD диска', price: '500 ₽' },
    { service: 'Ремонт материнской платы', price: 'от 3 000 ₽' }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'До 6 месяцев на все виды работ'
    },
    {
      icon: 'Clock',
      title: 'Быстрый ремонт',
      description: 'Большинство работ за 1-2 часа'
    },
    {
      icon: 'Award',
      title: 'Опыт 15 лет',
      description: 'Более 10 000 отремонтированных устройств'
    },
    {
      icon: 'Wrench',
      title: 'Оригинальные запчасти',
      description: 'Только качественные комплектующие'
    }
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-sidebar text-sidebar-foreground hidden lg:block fixed h-full border-r border-sidebar-border">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-sidebar-foreground">Электрарь</h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('home')}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeSection === 'home' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('services')}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeSection === 'services' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              Услуги
            </button>
            <button
              onClick={() => setActiveSection('prices')}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeSection === 'prices' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              Прайс-лист
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeSection === 'about' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              О нас
            </button>
            <button
              onClick={() => setActiveSection('contacts')}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeSection === 'contacts' ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64">
        <header className="bg-white border-b border-border sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="icon">
                      <Icon name="Menu" size={20} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-6">
                    <h2 className="text-xl font-bold mb-6">Электрарь</h2>
                    <nav className="space-y-2">
                      <button onClick={() => setActiveSection('home')} className="w-full text-left px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">Главная</button>
                      <button onClick={() => setActiveSection('services')} className="w-full text-left px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">Услуги</button>
                      <button onClick={() => setActiveSection('prices')} className="w-full text-left px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">Прайс-лист</button>
                      <button onClick={() => setActiveSection('about')} className="w-full text-left px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">О нас</button>
                      <button onClick={() => setActiveSection('contacts')} className="w-full text-left px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">Контакты</button>
                    </nav>
                  </SheetContent>
                </Sheet>
                <h1 className="text-2xl font-bold text-secondary lg:hidden">Электрарь</h1>
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать звонок
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Свяжитесь с нами</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" size={20} className="text-primary" />
                        <div>
                          <p className="font-medium">+7 (495) 123-45-67</p>
                          <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Mail" size={20} className="text-primary" />
                        <div>
                          <p className="font-medium">info@elektrar.ru</p>
                          <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <div>
                          <p className="font-medium">г. Москва, ул. Примерная, д. 10</p>
                          <p className="text-sm text-muted-foreground">м. Площадь Революции</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <nav className="border-t border-border">
              <div className="flex gap-6 py-3">
                <button onClick={() => setActiveSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
                <button onClick={() => setActiveSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
                <button onClick={() => setActiveSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Прайс-лист</button>
                <button onClick={() => setActiveSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
                <button onClick={() => setActiveSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
              </div>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {activeSection === 'home' && (
            <div className="space-y-12">
              <section className="text-center py-12">
                <h2 className="text-4xl font-bold text-secondary mb-4">Профессиональный ремонт электроники</h2>
                <p className="text-xl text-muted-foreground mb-8">Быстро, качественно, с гарантией</p>
                <Button onClick={() => setActiveSection('prices')} size="lg" className="bg-primary hover:bg-primary/90">
                  Смотреть прайс-лист
                </Button>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-secondary mb-6">Наши услуги</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                          <Icon name={service.icon} size={24} className="text-primary" />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                        <p className="text-accent font-bold text-lg">{service.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-secondary mb-6">Наши преимущества</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {advantages.map((item, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                          <Icon name={item.icon} size={24} className="text-accent" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeSection === 'services' && (
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">Наши услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon} size={32} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <p className="text-accent font-bold text-xl">{service.price}</p>
                      <Button className="mt-4 w-full bg-primary hover:bg-primary/90">Заказать</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'prices' && (
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">Прайс-лист</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Популярные виды ремонта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {priceList.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                        <span className="font-medium">{item.service}</span>
                        <span className="text-accent font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Info" size={16} className="inline mr-2" />
                      Точную стоимость ремонта можно узнать после бесплатной диагностики
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'about' && (
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">О мастерской</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <p className="text-lg">
                      Мастерская "Электрарь" работает на рынке ремонта электроники с 2009 года. За это время мы накопили богатый опыт и отремонтировали более 10 000 устройств.
                    </p>
                    <p>
                      Наши специалисты регулярно проходят обучение и сертификацию, что позволяет нам выполнять ремонт любой сложности на высоком профессиональном уровне.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">15</div>
                        <div className="text-muted-foreground">лет опыта</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">10 000+</div>
                        <div className="text-muted-foreground">отремонтировано</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-muted-foreground">довольных клиентов</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'contacts' && (
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">Контакты</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Свяжитесь с нами</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">+7 (495) 123-45-67</p>
                        <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">info@elektrar.ru</p>
                        <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">г. Москва, ул. Примерная, д. 10</p>
                        <p className="text-sm text-muted-foreground">м. Площадь Революции</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Режим работы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span>Понедельник - Пятница</span>
                        <span className="font-bold">9:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span>Суббота</span>
                        <span className="font-bold">10:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Воскресенье</span>
                        <span className="font-bold">10:00 - 18:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>

        <footer className="bg-secondary text-secondary-foreground mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-sm">© 2024 Электрарь. Все права защищены.</p>
              <p className="text-sm mt-2 text-muted">Профессиональный ремонт электроники с 2009 года</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;