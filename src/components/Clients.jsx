import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { data } from '../assets/clients.json'

export default function Clients({data}) {
  
  const styles = StyleSheet.create({
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    }, 
    tableCell: { 
      margin: "auto", 
      marginTop: 10, 
      fontSize: 10 
    }
  });
  
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.table}> 
          <View style={styles.tableRow}> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Código</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Nome</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>E-mail</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Telefone</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>Cidade</Text> 
            </View> 
          </View>
          {data.map((client) => {
          <View style={styles.tableRow}> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>{client.id}</Text> 
            </View> 
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>{client.name}</Text> 
            </View> 
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{client.email}</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>{client.contact}</Text> 
            </View>
            <View style={styles.tableCol}> 
              <Text style={styles.tableCell}>{client.location}</Text> 
            </View>
          </View> 
            })}
        </View>
      </Page>
    </Document>
  );


}
