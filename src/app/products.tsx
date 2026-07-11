import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const mockProducts = [
  {
    id: '1',
    title: 'Ergonomic Chair ENCLOSE',
    stock: 12,
    category: 'chair',
    location: 3,
    price: 21999,
    status: 'Active',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTV_uuZX7S5YV3W4zfUpscNqgjCXYwKZIxDU1AZhBdLQENf-zT-MPAB_7M-9clr0zu_vmRXL_0Wx0p4jM_S8f9-CHOSK0feMFbglH2lZz4mNX6UbZ1LPMW4daBbioK75yc2wALc_w&usqp=CAc',
  },
  {
    id: '2',
    title: 'Ergonomic Chair ESTEEM PLUS',
    stock: 12,
    category: 'chair',
    location: 3,
    price: 21999,
    status: 'Active',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd45mkS4O9R0hRuXxUG3L1yVJwACYTGd0wOgtMroaUcg&s=10',
  },
  {
    id: '3',
    title: 'Ergonomic Chair Embrace',
    stock: 12,
    category: 'chair',
    location: 3,
    price: 12999,
    status: 'Active',
    image: 'https://www.okamura.co.th/wp-content/uploads/2025/06/%E0%B9%81%E0%B8%84%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%8D-16-800x800.jpg',
  },
];

export default function ProductsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu" size={28} color="#666" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Products</Text>
          <TouchableOpacity>
            <Ionicons name="person-circle" size={36} color="#7B2CBF" />
          </TouchableOpacity>
        </View>

        <View style={styles.actionBar}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#7B2CBF" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={18} color="white" />
            <Text style={styles.addButtonText}>Add Product</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
            <Ionicons name="funnel" size={16} color="#7B2CBF" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.productList} showsVerticalScrollIndicator={false}>
          {mockProducts.map((item) => (
            <View key={item.id} style={styles.productCard}>
              <View style={styles.cardTopRow}>
                {/* รูปภาพ */}
                <Image source={{ uri: item.image }} style={styles.productImage} />
                
                <View style={styles.productInfo}>
                  <Text style={styles.infoText}>Stock: {item.stock} in stock</Text>
                  <Text style={styles.infoText}>Category: {item.category}</Text>
                  <Text style={styles.infoText}>Location: {item.location} stores</Text>
                  <Text style={styles.infoText}>Price: {item.price} bath</Text>
                  
                  <View style={styles.statusRow}>
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.status}</Text>
                    </View>
                    <TouchableOpacity style={styles.arrowButton}>
                      <Ionicons name="chevron-forward" size={16} color="#7B2CBF" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              <Text style={styles.productTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Feather name="home" size={20} color="#C4C4C4" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Feather name="plus-circle" size={20} color="#C4C4C4" />
            <Text style={styles.navText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Feather name="shopping-bag" size={20} color="#7B2CBF" />
            <Text style={[styles.navText, { color: '#7B2CBF', fontWeight: 'bold' }]}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Feather name="grid" size={20} color="#C4C4C4" />
            <Text style={styles.navText}>Categories</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#4A148C',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 14,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  filterText: {
    color: '#7B2CBF',
    marginRight: 6,
    fontWeight: 'bold',
  },
  productList: {
    paddingHorizontal: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardTopRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  productInfo: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  infoText: {
    color: '#666',
    fontSize: 13,
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  badge: {
    backgroundColor: '#B388FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  arrowButton: {
    marginLeft: 10,
    backgroundColor: '#F3E5F5',
    borderRadius: 12,
    padding: 4,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 11,
    color: '#C4C4C4',
    marginTop: 4,
  }
});