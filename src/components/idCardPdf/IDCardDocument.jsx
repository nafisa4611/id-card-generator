import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import IDCardFrontPDF from "./IDCardFrontPDF";
import IDCardBackPDF from "./IDCardBackPDF";

const CARD_WIDTH = 242.6; 
const CARD_HEIGHT = 153.1;

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,      // Extra top/bottom padding for printer safety
    paddingBottom: 50,
    paddingHorizontal: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,             // Space between cards so borders don't touch
    backgroundColor: '#FFFFFF',
  },
  // The cutting border
  cardPairWrapper: {
    width: CARD_WIDTH * 2,
    height: CARD_HEIGHT,
    flexDirection: 'row',
    border: '0.8pt dashed #BBBBBB', // Light dashed line for cutting
    borderRadius: 2,               // Slight radius to guide rounded corners
    overflow: 'hidden',
  },
  side: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  // Solid vertical line between Front and Back for folding/center-cut
  verticalDivider: {
    width: 0.5,
    height: '100%',
    backgroundColor: '#EEEEEE', 
  }
});

export default function IDCardDocument({ users }) {
  const CARDS_PER_PAGE = 4; 
  const pages = [];

  for (let i = 0; i < users.length; i += CARDS_PER_PAGE) {
    const pageUsers = users.slice(i, i + CARDS_PER_PAGE);

    pages.push(
      <Page key={i} size="A4" style={styles.page}>
        {pageUsers.map((user) => (
          <View key={user.id} style={styles.cardPairWrapper}>
            <View style={styles.side}>
              <IDCardFrontPDF data={user} />
            </View>
            
            {/* Center Fold/Cut Line */}
            <View style={styles.verticalDivider} />

            <View style={styles.side}>
              <IDCardBackPDF data={user} />
            </View>
          </View>
        ))}
      </Page>
    );
  }

  return <Document>{pages}</Document>;
}