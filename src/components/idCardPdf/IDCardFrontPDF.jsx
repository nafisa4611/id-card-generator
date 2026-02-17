import React from 'react';
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const frontStyles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    flexDirection: "row",
    backgroundColor: "#ffffff",
    // Clean border to help with cutting after print
    border: '0.5pt solid #E5E7EB',
  },
  left: {
    width: 95, 
    height: '100%',
    backgroundColor: "#F3F4F6", // Light gray background on the left as requested
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  photo: {
    width: 80,
    height: 105,
    borderRadius: 4,
    objectFit: "cover",
    // Slight shadow effect for professional look
    border: '0.5pt solid #D1D5DB', 
  },
  right: {
    flex: 1,
    padding: 12,
    position: "relative",
    justifyContent: 'flex-start',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: { 
    fontSize: 13, 
    fontWeight: "bold", 
    color: "#000000",
    marginBottom: 1 
  },
  idText: { 
    fontSize: 9, 
    fontWeight: "bold", 
    color: "#2563EB", // Blue ID as per design
    marginBottom: 4 
  },
  info: { 
    fontSize: 8, 
    color: "#374151", 
    marginBottom: 2 
  },
  type: {
    fontSize: 7,
    fontWeight: 'bold',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    marginTop: 6,
  },
  logo: { 
    width: 32, 
    height: 32, 
    objectFit: 'contain'
  },
  qr: { 
    width: 35, 
    height: 35, 
    position: 'absolute', 
    bottom: 25, 
    right: 12 
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: 7,
    textAlign: 'center',
    borderTop: '0.5pt solid #F3F4F6',
    paddingVertical: 4,
    color: '#9CA3AF',
    backgroundColor: '#FAFAFA'
  }
});

export default function IDCardFrontPDF({ data }) {
  return (
    <View style={frontStyles.card}>
      {/* Photo with the light gray sidebar background */}
      <View style={frontStyles.left}>
        <Image src={data.photo} style={frontStyles.photo} />
      </View>

      <View style={frontStyles.right}>
        {/* Header containing Name/ID and Logo inline */}
        <View style={frontStyles.headerRow}>
          <View style={frontStyles.textContainer}>
            <Text style={frontStyles.name}>{data.name}</Text>
            <Text style={frontStyles.idText}>ID: {data.id}</Text>
          </View>
          {data.logo && <Image src={data.logo} style={frontStyles.logo} />}
        </View>

        {/* Professional details aligned with the photo */}
        <View>
          <Text style={frontStyles.info}>{data.designation}</Text>
          <Text style={frontStyles.info}>{data.department}</Text>
          
          {/* Optional Level/Semester or Blood Group as seen in design */}
          {(data.level || data.semester) && (
            <Text style={frontStyles.info}>
              Level: {data.level} | Sem: {data.semester}
            </Text>
          )}
          
          <Text style={frontStyles.type}>{data.type || 'Employee'}</Text>
        </View>

        {/* QR Code positioned above footer line */}
        <Image src={data.qrCode} style={frontStyles.qr} />
        
        <Text style={frontStyles.footer}>
          Khulna Agricultural University
        </Text>
      </View>
    </View>
  );
}