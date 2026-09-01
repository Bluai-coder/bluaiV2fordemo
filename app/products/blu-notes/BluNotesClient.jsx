// import React from 'react'
// import BluNotesHero from '../../../components/blu-notes/BluNotesHero'
// import BluNotesDocumentationSection from '../../../components/blu-notes/BluNotesDocumentationSection'
// import WhyChoosingUs from '../../../components/blu-notes/WhyChoosingUs'
// import CompleteAiSolution from '../../../components/blu-notes/CompleteAiSolution'
// import OurServicesTabsSection from '../../../components/blu-notes/OurServicesTabsSection'
// import BluNotesPlatformAndCapabilities from '../../../components/blu-notes/BluNotesPlatformAndCapabilities'
// import DelightRetainUsersSection from "../../../components/blu-notes/DelightRetainUsersSection"

// function page() {
//   return (
//     <>
//     <BluNotesHero/>
//     <BluNotesDocumentationSection/>
//     <WhyChoosingUs/>
//     <CompleteAiSolution/>
//     <OurServicesTabsSection/>
//     <BluNotesPlatformAndCapabilities/>
//     <DelightRetainUsersSection/>
//     </>
//   )
// }

// export default page






import React from 'react';
import BluNotesHero from '../../../components/blu-notes/BluNotesHero';
import BluNotesDocumentationSection from '../../../components/blu-notes/BluNotesDocumentationSection';
import WhyChoosingUs from '../../../components/blu-notes/WhyChoosingUs';
import CompleteAiSolution from '../../../components/blu-notes/CompleteAiSolution';
import OurServicesTabsSection from '../../../components/blu-notes/OurServicesTabsSection';
import BluNotesPlatformAndCapabilities from '../../../components/blu-notes/BluNotesPlatformAndCapabilities';
import DelightRetainUsersSection from "../../../components/blu-notes/DelightRetainUsersSection";



export default function Page() {
  return (
    <>
     
      <BluNotesHero />
      <BluNotesDocumentationSection />
      <WhyChoosingUs />
      <CompleteAiSolution />
      <OurServicesTabsSection />
      <BluNotesPlatformAndCapabilities />
      <DelightRetainUsersSection />
    </>
  );
}