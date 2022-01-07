import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BookProvider } from "./teoyubereact/utils/BookContext";
import Books from "./teoyubereact/pages/Books";
import Detail from "./teoyubereact/pages/Detail";
import NoMatch from "./teoyubereact/pages/NoMatch";
import Nav from "./teoyubereact/components/Nav";

function Clients() {
  return (
    <BookProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/pages/Clients", "/books"]}>
              <Books />
            </Route>
            <Route exact path="/pages/Clients/books/:id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </BookProvider>
  );
}

export default Clients;




// import React from "react";
// import OmdbContainer from "./teoyubepromises/OmdbContainer";
// import { Video,  } from "react-feather";

// import {
//   Button,
//   Badge,
//   Card,
//   CardBody,
//   CardHeader,
//   CardTitle,
//   Col,
//   Container,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Row,
//   Table,
//   UncontrolledDropdown
// } from "reactstrap";

// import Timeline from "../../components/Timeline";

// import { MoreHorizontal } from "react-feather";

// import avatar7 from "../../assets/img/avatars/avatar-7.jpg";
// import avatar8 from "../../assets/img/avatars/avatar-8.jpg";
// import avatar9 from "../../assets/img/avatars/avatar-9.jpg";
// import avatar10 from "../../assets/img/avatars/avatar-10.jpg";
// import avatar11 from "../../assets/img/avatars/avatar-11.jpg";
// import avatar12 from "../../assets/img/avatars/avatar-12.jpg";
// import avatar13 from "../../assets/img/avatars/avatar-13.jpg";
// import avatar15 from "../../assets/img/avatars/avatar-15.jpg";

// const ClientsList = () => (
//   <Card>
//     <CardHeader>
//       <div className="card-actions float-right">
//         <UncontrolledDropdown>
//           <DropdownToggle tag="a">
//             <MoreHorizontal />
//           </DropdownToggle>
//           <DropdownMenu right>
//             <DropdownItem>Action</DropdownItem>
//             <DropdownItem>Another Action</DropdownItem>
//             <DropdownItem>Something else here</DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </div>
//       <CardTitle tag="h5" className="mb-0">
//         Clients
//       </CardTitle>
//     </CardHeader>
//     <div className="position-relative">
//       <div className="chat-messages p-4">
//         <Table className="mb-0">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Watch Video</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <img
//                   src={avatar7}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Teoyube; Tymakwithohis, Cawtrotglohinits</td>
//               <td>The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints,</td>
//               <td>
//                 <Button rel="noreferrer noopener" target="_blank" href={'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-10.jpg?raw=true'}
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">Eph-1:18</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar8}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Wetawtwhi, Byatyrntgogodiv</td>
//               <td>We then, as workers together with him, beseech you also that ye receive not the grace of God in vain.</td>
//               <td>
//                 <Button rel="noreferrer noopener" target="_blank" href={'http://teoyube.com/Promises/Iatdobymiameni-Hesbesasgianoafip-Ephphatha/Bihetcitnotlo/Tbugodfohug/Video.aspx'}
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">2Cor-6:1</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//               <img
//                 src={avatar9}
//                 width="32"
//                 height="32"
//                 className="rounded-circle my-n1"
//                 alt="Avatar"
//               />
//               </td>
//               <td>Fohsihahtiata, Aitdoshistbnitdos</td>
//               <td>(For he saith, I have heard thee in a time accepted, and in the day of salvation have I succored thee: behold, now is the day of salvation.)</td>
//               <td>
//                 <Button rel="noreferrer noopener" target="_blank" href={'http://teoyube.com/Promises/IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG/Video.aspx'}
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="warning">2Cor-6:2</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar10}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Gnoiatttmbnb</td>
//               <td>Giving no offense in any thing, that the mininstry be not blamed:</td>
//               <td>
//                 <Button rel="noreferrer noopener" target="_blank" href={'http://teoyube.com/Promises/IATDOBYMIAMENI,HESBESASGIANOAFIP.EPHPHATHA;BIHETCITNOTLO.TBUGODFOHUG/Video.aspx=true'}
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">2Cor-6:3</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar11}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Biataoatmogod, Impiainid</td>
//               <td>But in all things approving ourselves as the misnisters of God, in much patience, in afflictions, in necessities, in distresses,</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="warning">2Cor-6:4</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar12}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Isiimitiliwif</td>
//               <td>In stripes, in imprisonments, in tum-ults, in labours, in watchings, in fastings,</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="warning">2Cor-6:5</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar13}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Bpbkblsbk, Btholyghostblu</td>
//               <td>By pureness, by knowledge, by long-suffering, by kindness, by the Holy Ghost, by love unfeigned,</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="success">2Cor-6:6</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar15}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Btwotbtpogod, Btaorotrhaotl</td>
//               <td>By the word of truth, by the power of God, by the armour of righteousness on the right hand and on the left,</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="success">2Cor-6:7</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar12}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Bhadberagradayt</td>
//               <td>By honour and dishonour, by evil report and good report: as deceivers, and yet true;</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//                 </td>
//               <td>
//                 <Badge color="danger">2Cor-6:8</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar15}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Auaywadabwlacank</td>
//               <td>As unknown, and yet wellknown; as dying, and behold, we live; as chastened, and not killed,</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="warning">2Cor-6:9</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar11}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Asyarapymmrahnaypat</td>
//               <td>As sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, and yet possessing all things.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="success">2Cor-6:10</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar7}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Yansiubyasiyob</td>
//               <td>O ye Prince, our mouth is open unto you, our heart is enlarged.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="warning">2Cor-6:11</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar7}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Yansiubyasiyob</td>
//               <td>Ye are not straitened in us, but ye are straitened in your own bowels.</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">2Cor-6:12</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar7}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Nfarisisaumcbyae</td>
//               <td>Now for a recompense in the same, (I speak as unto my children,) be ye also enlarged.</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">2Cor-6:13</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar8}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Bynuytwbfwfhrwuawchlwd</td>
//               <td>Be ye not unequally yoked together with believers: for what fellowship hath righteousness with unrighteouness? and what communion hath light with darkness?</td>
//               <td>
//                 <Button rel="noreferrer noopener" target="_blank" href={'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-37.jpg?raw=true'}
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">2Cor-6:14</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//               <img
//                 src={avatar9}
//                 width="32"
//                 height="32"
//                 className="rounded-circle my-n1"
//                 alt="Avatar"
//               />
//               </td>
//               <td>Awchchristwbowphhtbwai</td>
//               <td>And what concord hath Christ with Belial? or what part hath he that believeth with an infidel?</td>
//               <td>
//               <Button 
//                 size="lg"
//                 color="info"
//                 className="mr-2 px-3 d-none d-md-inline-block"
//               >
//                 <Video className="feather" />
//               </Button>
//               </td>
//               <td>
//                 <Badge color="warning">2Cor-6:15</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar10}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Awahttogodwifyattotlgod, Agodhsiwditawit, Aiwbtgodatsbmp</td>
//               <td>And what agreement hath the temple of God with idols? for ye are the temple of the living God; as God hath said, I will dwell in them, and walk in them; and I will be their God, and they shall be my people.</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="success">2Cor-6:16</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar11}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Wcofatabysstl, Atntutaiwry</td>
//               <td>Wherefore come out from among them, and be ye separate, saith the Lord, and touch not the unclean thing; and I will receive you</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="warning">2Cor-6:17</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar12}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Awbafuyaysbmsadstla</td>
//               <td>And will be a Father unto you, and ye shall be my sons and daughters, saith the Lord Almighty.</td>
//               <td>
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//               </td>
//               <td>
//                 <Badge color="warning">2Cor-6:18</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar13}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Httpdblucofafotfasphitfogod</td>
//               <td>Having therefore these promises, dearly beloved, let us cleanse ourselves from all filthiness of the flesh and spirit, perfecting holiness in the fear of God.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="success">2Cor-7:1</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar15}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Ruwhwnmwhcnmwhdnm</td>
//               <td>Receive us; we have wronged no man, we have corrupted no man, we have defrauded no man.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="success">2Cor-7:2</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar12}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Isnttcyfihsbtyaiohtdalwy</td>
//               <td>I speak not this to condemn you: for I have said before, that ye are in our heart to die and live with you.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button>
//                 </td>
//               <td>
//                 <Badge color="danger">2Cor-7:3</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar15}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Gimbosptygimgoy: Iafwciaejiaot</td>
//               <td>Great is my boldness of speech toward you, great is my glorying of you: I am filled with comfort, I am exceeding joyful in all our tribulation.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="warning">2Cor-7:4</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar11}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Fwwwcimofhnr, Bwwtoeswwfwwf</td>
//               <td>For, when we were come into Macedonia, our flesh had no rest, but we were troubled on every side; without were fightings, within were fears.</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="success">2Cor-7:5</Badge>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <img
//                   src={avatar7}
//                   width="32"
//                   height="32"
//                   className="rounded-circle my-n1"
//                   alt="Avatar"
//                 />
//               </td>
//               <td>Ngodtcttacdubtcot</td>
//               <td>Nevertheless God, that comforteth those that are cast down, comforted us by the coming of Teoyube;</td>
//               <td>              
//                 <Button 
//                   size="lg"
//                   color="info"
//                   className="mr-2 px-3 d-none d-md-inline-block"
//                 >
//                   <Video className="feather" />
//                 </Button></td>
//               <td>
//                 <Badge color="warning">2Cor-7:6</Badge>
//               </td>
//             </tr>
//           </tbody>
//         </Table>       
//       </div>
//     </div>
//   </Card>
// );

// const Single = () => (
//   <Card>
//     <CardHeader>
//       <div className="card-actions float-right">
//         <UncontrolledDropdown>
//           <DropdownToggle tag="a">
//             <MoreHorizontal />
//           </DropdownToggle>
//           <DropdownMenu right>
//             <DropdownItem>Action</DropdownItem>
//             <DropdownItem>Another Action</DropdownItem>
//             <DropdownItem>Something else here</DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </div>
//       <CardTitle tag="h5" className="mb-0">
//         Lordium Christ
//       </CardTitle>
//     </CardHeader>
//     <CardBody>
//       <Row noGutters>
//         <Col sm="3" xl="12" className="col-xxl-3 text-center">
//           <img
//             src={avatar13}
//             width="64"
//             height="64"
//             className="rounded-circle mt-2"
//             alt="Angelica Ramos"
//           />
//         </Col>
//         <Col sm="9" xl="12" className="col-xxl-9">
//           <strong>About me</strong>
//           <p>
//             The eyes of your understanding being enlightened that ye may know what 
//             is the hope of your calling and what the riches of the glory of his 
//             inheritance in the saints,
//           </p>
//         </Col>
//       </Row>

//       <Table size="sm" className="my-2">
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <td>Lordium Christ</td>
//           </tr>
//           <tr>
//             <th>Company</th>
//             <td>Teoyube Coporation</td>
//           </tr>
//           <tr>
//             <th>Email</th>
//             <td>lordium@christ.com</td>
//           </tr>
//           <tr>
//             <th>Phone</th>
//             <td>+1234123123123</td>
//           </tr>
//           <tr>
//             <th>Status</th>
//             <td>
//               <span className="badge badge-success">Active</span>
//             </td>
//           </tr>
//         </tbody>
//       </Table>

//       <hr />

//       <strong>Activity</strong>

//       <Timeline className="mt-2">
//         <OmdbContainer />
//       </Timeline>
//     </CardBody>
//   </Card>
// );

// const Clients = () => (
//   <Container fluid className="p-0">
//     <h1 className="h3 mb-3">Clients</h1>

//     <Row>
//       <Col xl="8">
//         <ClientsList />
//       </Col>
//       <Col xl="4">
//         <Single />
//       </Col>
//     </Row>
//   </Container>
// );

// export default Clients;
