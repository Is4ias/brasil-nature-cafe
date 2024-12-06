import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: 'Nova mensagem',
      message: 'Você tem uma nova mensagem!',
    },
    {
      id: 2,
      title: 'Atualização de status',
      message: 'Seu status foi atualizado com sucesso.',
    },
    {
      id: 3,
      title: 'Oferta especial',
      message: 'Não perca nossa oferta exclusiva!',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
        {notifications.map(notification => (
          <View key={notification.id} styles={styles.notification}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text stytle={styles.notificationMessage}>{notification.message}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: '#0C0F14',
    

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D17842'

  },
  notification:{
    borderBottomWidth:1 ,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 0,
    color: '#FFF',

  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFF'

  },
  notificationMessage: {
    fontSize: 16,
    color: '#D17842'

  },
});

export default NotificationsPage;