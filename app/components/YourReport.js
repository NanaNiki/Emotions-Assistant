/**
 * This is a React component that generates a PDF report based on selected emotions, thoughts and affirmatio
 * from states being passed as props.
 * @returns The `YourReport` component is being returned, which renders a PDF document with selected
 * emotion, thoughts and affirmation.
 * and to nest it inside thankyou.js
 */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 60,
    paddingHorizontal: 35,
  },
  section: {
    zIndex: 10,
    paddingBottom: 10,
  },
  title: {
    color: "#5271FF",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Helvetica-BoldOblique",
  },
  text: {
    color: "#3B429F",
    padding: 5,
    fontSize: 12,
    paddingHorizontal: 50,
    textAlign: "justify",
    fontFamily: "Helvetica",
    lineHeight: 1.25,
  },
  affirm: {
    color: "#3B429F",
    padding: 5,
    fontSize: 12,
    paddingHorizontal: 50,
    textAlign: "center",
    fontFamily: "Helvetica",
    lineHeight: 1.25,
    zIndex: 20,
  },
  imagetop: {
    top: 0,
    left: 0,
    zIndex: 0,
    height: 150,
    position: "absolute",
  },
  imagebot: {
    bottom: 0,
    right: 0,
    zIndex: 0,
    height: 150,
    position: "absolute",
  },
});

export default function YourReport({ selectedEmotion, thoughts, affirmation }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          src={"images/pdftop.png"}
          style={styles.imagetop}
          fixed={true}
          alt="pdfblobtop"
        ></Image>
        <View style={styles.section}>
          <Text style={styles.title}>
            ~ Today I worked on: {selectedEmotion?.name} ~
          </Text>
          <Text style={styles.text}>{selectedEmotion?.text}</Text>
          <Text style={styles.text}> {selectedEmotion?.feel}</Text>
          <Text style={styles.text}> {selectedEmotion?.express} </Text>
          <Text style={styles.text}> {selectedEmotion?.note} </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}> My reflections:</Text>
          <Text style={styles.text}>{thoughts}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}> My affirmation:</Text>
          <Text style={styles.affirm}>{affirmation}</Text>
        </View>
        <Image
          src={"images/pdfbot.png"}
          style={styles.imagebot}
          fixed={true}
          alt="pdfblobbottom"
        ></Image>
      </Page>
    </Document>
  );
}
