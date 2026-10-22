import { publicAsset } from "@/lib/publicAsset";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Layout from "@/components/Layout";

const BASE_URL = publicAsset("/images/gallery/");

const photos = [
  { src: "487413860_122104334234817466_5857429004640092547_n.jpg", alt: "Match Point event photo" },
  { src: "491946813_122111607518817466_8457962791625126858_n.jpg", alt: "Match Point community" },
  { src: "492369099_122111607464817466_5514785649152942477_n.jpg", alt: "Match Point pickleball" },
  { src: "494991548_122115692474817466_877730233851924762_n.jpg", alt: "Match Point facility" },
  { src: "495280771_122115692582817466_7076596283412038659_n.jpg", alt: "Match Point courts" },
  { src: "499155677_122120009864817466_686258161096879779_n.jpg", alt: "Match Point action" },
  { src: "508181443_122124482234817466_4005857761487397921_n.jpg", alt: "Match Point event" },
  { src: "517753948_122129279624817466_111100875931455095_n.jpg", alt: "Match Point tournament" },
  { src: "520142311_122132371862817466_4811457058719791102_n.jpg", alt: "Match Point players" },
  { src: "522631682_122131260830817466_6987686997784118022_n.jpg", alt: "Match Point community event" },
  { src: "523858040_122131547216817466_1744263450903072650_n.jpg", alt: "Match Point pickleball action" },
  { src: "524256289_122131260842817466_1160175177592367899_n.jpg", alt: "Match Point facility view" },
  { src: "526770291_122132752802817466_2819144141391875356_n.jpg", alt: "Match Point courts view" },
  { src: "532424565_122134481660817466_166207155636105481_n.jpg", alt: "Match Point event photo" },
  { src: "536276226_122134989080817466_8511140460464477934_n.jpg", alt: "Match Point logo" },
  { src: "537835284_122135703848817466_2003402537754057071_n.jpg", alt: "Match Point branding" },
  { src: "538554347_122135543702817466_4490727282893666308_n.jpg", alt: "Match Point scene" },
  { src: "539597119_122135703086817466_2074361973535119887_n.jpg", alt: "Match Point facility" },
  { src: "539765648_122136217268817466_5063693398226302787_n.jpg", alt: "Match Point detail" },
  { src: "541620841_122137188572817466_7106943444316295300_n.jpg", alt: "Match Point courts" },
  { src: "541651878_122136734336817466_667852234431664439_n.jpg", alt: "Match Point players" },
  { src: "541846988_122136862694817466_2045119769947192459_n.jpg", alt: "Match Point event" },
  { src: "542750184_122136954020817466_3040412034359649249_n.jpg", alt: "Match Point community" },
  { src: "544920380_122137349534817466_5656869986086719555_n.jpg", alt: "Match Point scene" },
  { src: "546851192_122137946036817466_6280382602336471437_n.jpg", alt: "Match Point facility" },
  { src: "547152047_122137946024817466_7587619067480025745_n.jpg", alt: "Match Point courts" },
  { src: "547583716_122137890218817466_5584401943361836087_n.jpg", alt: "Match Point action" },
  { src: "547931955_122138216138817466_3967640504661550861_n.jpg", alt: "Match Point detail" },
  { src: "552972689_122139772442817466_1215816802186081508_n.jpg", alt: "Match Point event" },
  { src: "555993549_122140352426817466_5228707484485996483_n.jpg", alt: "Match Point scene" },
  { src: "558447817_122141206964817466_8795444886461632561_n.jpg", alt: "Match Point facility" },
  { src: "561748985_122141598344817466_8579238695318834898_n.jpg", alt: "Match Point courts" },
  { src: "564598509_122141598356817466_985281662383256600_n.jpg", alt: "Match Point action" },
  { src: "564684756_122142316472817466_3671004601567783841_n.jpg", alt: "Match Point event" },
  { src: "565084022_122142420578817466_2937513367151828593_n.jpg", alt: "Match Point community" },
  { src: "569408085_122143015598817466_1721809577427042994_n.jpg", alt: "Match Point tournament" },
  { src: "571105585_122143037996817466_8240275738245229438_n.jpg", alt: "Match Point scene" },
  { src: "571231502_122143041128817466_229479549351927112_n.jpg", alt: "Match Point facility" },
  { src: "571265443_122143043330817466_4277700129352552958_n.jpg", alt: "Match Point courts" },
  { src: "571269033_122143041116817466_1110392850971172270_n.jpg", alt: "Match Point action" },
  { src: "571276195_122143043306817466_4143265098896016292_n.jpg", alt: "Match Point event" },
  { src: "571327258_122143039700817466_7881554091023301692_n.jpg", alt: "Match Point players" },
  { src: "571340346_122143038074817466_1234572064857592433_n.jpg", alt: "Match Point detail" },
  { src: "571347374_122143079600817466_1386890286770271720_n.jpg", alt: "Match Point facility" },
  { src: "571348205_122143042904817466_5290361770499709487_n.jpg", alt: "Match Point courts" },
  { src: "571358421_122143040642817466_4388285725192276515_n.jpg", alt: "Match Point action" },
  { src: "571358470_122143043318817466_7729710501518195383_n.jpg", alt: "Match Point event" },
  { src: "571363061_122143042454817466_6559710469869682514_n.jpg", alt: "Match Point community" },
  { src: "571364993_122143040198817466_7178606648780951824_n.jpg", alt: "Match Point tournament" },
  { src: "571368022_122143043378817466_1733839333217489070_n.jpg", alt: "Match Point scene" },
  { src: "571422907_122143080344817466_8210620587829611362_n.jpg", alt: "Match Point facility" },
  { src: "571554356_122143042226817466_9215531287549118944_n.jpg", alt: "Match Point courts" },
  { src: "571623809_122143040240817466_6105258189703338651_n.jpg", alt: "Match Point players" },
  { src: "571636999_122143043294817466_6917737722380698360_n.jpg", alt: "Match Point event" },
  { src: "571655828_122143080320817466_237486401555252490_n.jpg", alt: "Match Point action" },
  { src: "571786317_122143040882817466_6915691255887288602_n.jpg", alt: "Match Point community" },
  { src: "572008690_122143043354817466_4759190673532254791_n.jpg", alt: "Match Point facility" },
  { src: "572013220_122143042856817466_4180232607390010599_n.jpg", alt: "Match Point courts" },
  { src: "572046007_122143041932817466_3194074965663419538_n.jpg", alt: "Match Point event" },
  { src: "572058203_122143039784817466_5342524214179132087_n.jpg", alt: "Match Point action" },
  { src: "572097434_122143038032817466_5278117997330801289_n.jpg", alt: "Match Point scene" },
  { src: "572133425_122143042424817466_4282272754289632077_n.jpg", alt: "Match Point facility" },
  { src: "572155811_122143043342817466_1567981627190058776_n.jpg", alt: "Match Point courts" },
  { src: "572274726_122143042136817466_6476550249305562948_n.jpg", alt: "Match Point players" },
  { src: "572387466_122143041434817466_6635034533556133380_n.jpg", alt: "Match Point event" },
  { src: "572747739_122143042916817466_4857193229567061563_n.jpg", alt: "Match Point community" },
  { src: "572971082_122143041452817466_959048107067878756_n.jpg", alt: "Match Point action" },
  { src: "574917811_122144134556817466_3930319165970834649_n.jpg", alt: "Match Point detail" },
  { src: "577039291_122144829230817466_9033026627747277308_n.jpg", alt: "Match Point facility" },
  { src: "577040710_122144829104817466_3969037944836286113_n.jpg", alt: "Match Point courts" },
  { src: "577060766_122144829056817466_8999799617277644533_n.jpg", alt: "Match Point event" },
  { src: "578246014_122144680094817466_5384602780020996780_n.jpg", alt: "Match Point action" },
  { src: "578652121_122144829134817466_4875068928546741727_n.jpg", alt: "Match Point scene" },
  { src: "579203904_122144743538817466_1037675186708337811_n.jpg", alt: "Match Point detail" },
  { src: "579887419_122144946722817466_5551340758463508341_n.jpg", alt: "Match Point facility" },
  { src: "579945924_122144829266817466_403910624236514930_n.jpg", alt: "Match Point courts" },
  { src: "580032447_122144680160817466_484805004686320174_n.jpg", alt: "Match Point event" },
  { src: "580109384_122144829194817466_1199675736517084406_n.jpg", alt: "Match Point community" },
  { src: "580914828_122144829050817466_4221685169215522090_n.jpg", alt: "Match Point action" },
  { src: "580983623_122145003494817466_3920219041653525605_n.jpg", alt: "Match Point scene" },
  { src: "581219556_122144829296817466_1741953793248564783_n.jpg", alt: "Match Point facility" },
  { src: "581352385_122144950340817466_4638467969690791012_n.jpg", alt: "Match Point courts" },
  { src: "581373952_122144950328817466_1837572129649824364_n.jpg", alt: "Match Point event" },
  { src: "585328002_122145704486817466_1995139417524060767_n.jpg", alt: "Match Point action" },
  { src: "585345151_122145704474817466_4366701112217826954_n.jpg", alt: "Match Point facility" },
  { src: "585886579_122145806498817466_4293253696814197194_n.jpg", alt: "Match Point detail" },
  { src: "587034211_122145995084817466_3508376868137381606_n.jpg", alt: "Match Point courts" },
  { src: "587254845_122145806690817466_3692185463459911612_n.jpg", alt: "Match Point event" },
  { src: "587272946_122145708068817466_8134478094729945174_n.jpg", alt: "Match Point community" },
  { src: "587879724_122145806624817466_5329250701638999649_n.jpg", alt: "Match Point action" },
  { src: "587951927_122145806636817466_5509025148532437962_n.jpg", alt: "Match Point scene" },
  { src: "588012313_122145806678817466_2652347588343027288_n.jpg", alt: "Match Point facility" },
  { src: "595667320_122147320178817466_1038453535947645318_n.jpg", alt: "Match Point courts" },
  { src: "596659728_122147461088817466_592785122702259051_n.jpg", alt: "Match Point event" },
  { src: "597560253_122147460890817466_7809245951209014211_n.jpg", alt: "Match Point action" },
  { src: "597706500_122147461100817466_9045881233544891430_n.jpg", alt: "Match Point facility" },
  { src: "599930184_122148391646817466_5373387462584232445_n.jpg", alt: "Match Point community" },
  { src: "600095837_122148751940817466_3651216773870671984_n.jpg", alt: "Match Point courts" },
  { src: "600288899_122147965358817466_492585831688786761_n.jpg", alt: "Match Point event" },
  { src: "600294728_122148033620817466_4613428112944413205_n.jpg", alt: "Match Point scene" },
  { src: "600329615_122147951426817466_6991879260306956847_n.jpg", alt: "Match Point action" },
  { src: "601008259_122148132260817466_3517988091559287582_n.jpg", alt: "Match Point detail" },
  { src: "601354112_122148484988817466_2706440760136841908_n.jpg", alt: "Match Point facility" },
  { src: "601493098_122148484952817466_1748679864942569434_n.jpg", alt: "Match Point courts" },
  { src: "602401415_122149048952817466_8058176835570569642_n.jpg", alt: "Match Point event" },
  { src: "602413828_122149048862817466_689634133375369422_n.jpg", alt: "Match Point action" },
  { src: "602891456_122148484904817466_4699072123360399342_n.jpg", alt: "Match Point community" },
  { src: "602975907_122148484874817466_645500579081905623_n.jpg", alt: "Match Point scene" },
  { src: "603023707_122148484880817466_7051253116682289317_n.jpg", alt: "Match Point facility" },
  { src: "603749008_122148485000817466_7845741315045216478_n.jpg", alt: "Match Point courts" },
  { src: "603879853_122148484916817466_6124334427282896827_n.jpg", alt: "Match Point event" },
  { src: "603914588_122148484940817466_7733004045071885693_n.jpg", alt: "Match Point action" },
  { src: "603941852_122148483314817466_3259492958511254168_n.jpg", alt: "Match Point facility" },
  { src: "608427418_122149706318817466_7682701824236349343_n.jpg", alt: "Match Point courts" },
  { src: "608510678_122149706306817466_4831494252306227309_n.jpg", alt: "Match Point event" },
  { src: "611133139_122150025344817466_6996949545435972564_n.jpg", alt: "Match Point detail" },
  { src: "611369208_122150025332817466_5220430771581481972_n.jpg", alt: "Match Point scene" },
  { src: "612750372_122150741264817466_3630065919962799491_n.jpg", alt: "Match Point facility" },
  { src: "612841998_122150420756817466_4037992581107801739_n.jpg", alt: "Match Point courts" },
  { src: "612873719_122150419190817466_8095291053318599418_n.jpg", alt: "Match Point event" },
  { src: "612882656_122150420738817466_3656877650350551309_n.jpg", alt: "Match Point action" },
  { src: "613368220_122150419172817466_7939331266632839427_n.jpg", alt: "Match Point community" },
  { src: "613423620_122150420774817466_8673995547027805107_n.jpg", alt: "Match Point facility" },
  { src: "614154219_122150600090817466_1862968290445941143_n.jpg", alt: "Match Point courts" },
  { src: "615161921_122150850374817466_8165558321293941589_n.jpg", alt: "Match Point event" },
  { src: "615338628_122150726774817466_8610672767821259860_n.jpg", alt: "Match Point action" },
  { src: "615793867_122150860214817466_7628846271802475725_n.jpg", alt: "Match Point detail" },
  { src: "616374130_122151265118817466_6045231574118865994_n.jpg", alt: "Match Point scene" },
  { src: "617730353_122152101824817466_2459295074880242702_n.jpg", alt: "Match Point facility" },
  { src: "619675776_122151908654817466_516148949132127018_n.jpg", alt: "Match Point courts" },
  { src: "620081477_122151908612817466_7762195950907167682_n.jpg", alt: "Match Point event" },
  { src: "621175068_122151908690817466_6957654227391619344_n.jpg", alt: "Match Point action" },
  { src: "621194965_122151908702817466_212864066508052670_n.jpg", alt: "Match Point community" },
  { src: "621342706_122152035182817466_403814376160256889_n.jpg", alt: "Match Point facility" },
  { src: "621342717_122151908666817466_2995664257942098929_n.jpg", alt: "Match Point courts" },
  { src: "621373003_122152034888817466_2180619503269125333_n.jpg", alt: "Match Point event" },
  { src: "621420005_122152034864817466_731500061763852165_n.jpg", alt: "Match Point action" },
  { src: "621490836_122152035134817466_7769319301107819474_n.jpg", alt: "Match Point scene" },
  { src: "621637442_122152034954817466_1538292986799916053_n.jpg", alt: "Match Point facility" },
  { src: "621642406_122151908624817466_4557116094285243526_n.jpg", alt: "Match Point courts" },
  { src: "621643454_122152035122817466_8449654221202449006_n.jpg", alt: "Match Point event" },
  { src: "621672748_122152034876817466_6594977722672766704_n.jpg", alt: "Match Point action" },
  { src: "621811335_122152035086817466_4645221031952710466_n.jpg", alt: "Match Point community" },
  { src: "625158208_122152476590817466_520037422022817325_n.jpg", alt: "Match Point facility" },
  { src: "626930979_122153403728817466_2330208456051745756_n.jpg", alt: "Match Point scene" },
  { src: "627394238_122153068250817466_8658393189055650515_n.jpg", alt: "Match Point courts" },
  { src: "629307995_122153235332817466_5124934321380337944_n.jpg", alt: "Match Point event" },
  { src: "630077307_122153307194817466_8068208536508975328_n.jpg", alt: "Match Point action" },
  { src: "630619826_122153400416817466_4706824299366738222_n.jpg", alt: "Match Point facility" },
  { src: "630665997_122153235350817466_2986884440879292206_n.jpg", alt: "Match Point courts" },
  { src: "630905590_122153400248817466_6240725823060177808_n.jpg", alt: "Match Point event" },
  { src: "630921456_122153400464817466_5722606928704247398_n.jpg", alt: "Match Point community" },
  { src: "630937172_122153400440817466_4037405747098620193_n.jpg", alt: "Match Point action" },
  { src: "630956054_122153400260817466_1125529254986922717_n.jpg", alt: "Match Point facility" },
  { src: "631128487_122153400452817466_3420153571807032318_n.jpg", alt: "Match Point courts" },
  { src: "631360524_122153400428817466_1604205723343005061_n.jpg", alt: "Match Point event" },
  { src: "632342403_122153400482817466_6977572452568251637_n.jpg", alt: "Match Point action" },
  { src: "634086478_122153796854817466_4143739825244978774_n.jpg", alt: "Match Point detail" },
  { src: "637129785_122154211112817466_8983880801332198021_n.jpg", alt: "Match Point scene" },
];

const Photos = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    },
    [goNext, goPrev]
  );

  return (
    <Layout>
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Photos</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at life at Match Point — our courts, events, and community in action.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61574524004625&sk=photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary hover:underline text-sm font-medium"
            >
              See more on our Facebook →
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img loading="lazy" decoding="async"
                  src={`${BASE_URL}${photo.src}`}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Photo lightbox"
            ref={(el) => el?.focus()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
              aria-label="Previous photo"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={`${BASE_URL}${photos[lightboxIndex].src}`}
              alt={photos[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
              aria-label="Next photo"
            >
              <ChevronRight size={36} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Photos;
