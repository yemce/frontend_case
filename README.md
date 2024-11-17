
### Özet
service klasöründe json kaynağına istek atılarak veriler alındı. Ardından context yapısı oluşturularak state yönetimi kolaylaştırılması amaçlandı. 
Products.js sayfasında ürünler listelendi ve ProductCard componenti üzerinden kart yapısı kullanıldı. Filtreleme için filters klasöründe fitreleme 
işlemleri yapıldı. FilterBar componenti product sayfasında çağrıldı. Bunun içinde yine state yönetimi context üzerinden gerçekleşti.

 React ile geliştirilen bu proje component ve state yapısını temel alarak geliştirilmiştir.
 State kontrolü için merkezi bir yapı oluşturmak adına context api yapısı tercih edildi.
 Kullanıcı arayüzü bileşenleri için muı tercih edildi
 Kaynağa istek atmak için axios kütüphanesi kullanıldı (fetch yapısına göre daha kullanıcı dostu olduğu için)



Projenizi yerel makinenizde çalıştırmak için gerekli adımlar

###Ön Koşullar

Projenin çalışabilmesi için aşağıdaki yazılımların yüklü olması gerekir:

- [Node.js](https://nodejs.org/) (v14 veya daha yeni bir sürüm)
- [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/) (paket yöneticisi olarak npm veya yarn kullanılabilir)

### Projeyi Klonlama

Öncelikle, projeyi bilgisayarınıza klonlayın:
```bash
git clone https://github.com/kullaniciAdi/proje-adi.git
cd proje-adi
```

### Bağımlılıkları indirme 
```bash
npm install
```

### Çalıştırma 
```bash
npm run start
```
