import React from 'react';
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const backStyles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    padding: 12,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    borderBottom: "0.5pt solid #E5E7EB",
    paddingBottom: 4,
  },
  text: { fontSize: 8, marginBottom: 4, color: "#4B5563" },
  signBox: {
    marginTop: 'auto',
    alignItems: 'flex-end',
  },
  signature: { width: 40, height: 20 },
  signLabel: {
    fontSize: 6,
    borderTop: '0.5pt solid #000',
    width: 80,
    textAlign: 'center',
    marginTop: 2,
    paddingTop: 2
  }
});

export default function IDCardBackPDF({ data }) {
  return (
    <View style={backStyles.card}>
      <Text style={backStyles.header}>ID Card Details</Text>
      <Text style={backStyles.text}>Address: {data.address}</Text>
      <Text style={backStyles.text}>Phone: {data.phone}</Text>
      <Text style={backStyles.text}>Emergency: {data.emergencyContact}</Text>
      <Text style={backStyles.text}>Valid Until: {data.expiry}</Text>
      
      <View style={backStyles.signBox}>
        <Image src={data.signature} style={backStyles.signature} />
        <Text style={backStyles.signLabel}>Authorized Signatory</Text>
      </View>
    </View>
  );
}