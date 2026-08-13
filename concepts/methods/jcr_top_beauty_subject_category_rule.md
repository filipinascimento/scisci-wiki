# JCR top-beauty subject-category rule

## Summary

A practical field-attribution rule for sleeping-beauty production uses JCR journal categories and a top-B percentile slice.

## Canonical Form

- Unit of analysis: WoS paper, JCR subject category, top-B percentile, journal, field label, or multilabel counting rule.
- Typical representation: top-B subject-category attribution protocol.
- Mechanism, measurement, or validation target: field-origin measurement for high-beauty papers.
- Empirical signature: top sleeping beauties are assigned to journal subject categories before field fractions are computed..

## Uses in Science of Science

- Refines sleeping-beauty field method by linking it to [field classifications](../measures/field_classifications.md) and [wos subject category fractionalization](../validations/wos_subject_category_fractionalization.md).
- Useful as a reusable check when [sleeping beauty field origin profile](../measures/sleeping_beauty_field_origin_profile.md) is interpreted from citation histories.
- Adds cross-links to [external discipline citation fraction](../measures/external_discipline_citation_fraction.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Restrict to papers in journals with at least one JCR category.
- Select the top 0.1 percent of papers by B and compute category fractions.
- Document how multidisciplinary and multilabel journals are counted.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) uses JCR subject categories, focuses on the top 0.1 percent of WoS papers by B, and computes fractions of those papers by category.
- The motif turns a field-profile figure into a reusable attribution rule.

## Caveats

- Journal categories proxy communities imperfectly.
- Multidisciplinary and multilabel journals need explicit counting rules.

## Links

- [Field classifications](../measures/field_classifications.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [Sleeping-beauty field-origin profile](../measures/sleeping_beauty_field_origin_profile.md)
- [External-discipline citation fraction](../measures/external_discipline_citation_fraction.md)
- [Multidisciplinary venue delayed recognition](../mechanisms/multidisciplinary_venue_delayed_recognition.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying Sleeping Beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; SciSciNet: W2171817276; WoS: unknown]

## Metadata

- Concept ID: `jcr_top_beauty_subject_category_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: top-B JCR field rule; sleeping-beauty subject-category attribution; high-B category fraction
