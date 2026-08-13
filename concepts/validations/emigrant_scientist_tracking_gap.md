# Emigrant scientist tracking gap

## Summary

Emigrant scientist tracking gap is the measurement problem that origin-country datasets often lose scientists after they leave, making emigration and diaspora scientific work hard to observe.

## Canonical Form

- Unit of analysis: scientist, origin country, training country, destination country, workforce survey, or bibliometric career record.
- Typical representation: missing-emigrant flag, origin-side undercount, coverage caveat, or linkage gap.
- Validation target: assess whether mobility data observe people after exit from the country that trained or produced them.
- Empirical signature: origin countries can estimate local foreign-born shares more easily than scientists born locally but active abroad.

## Uses in Science of Science

- Qualifies [scientific mobility](../mechanisms/scientific_mobility.md) estimates from national workforce data.
- Directly affects [scientific emigration rate](../measures/scientific_emigration_rate.md).
- Motivates use of [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md) in cross-country surveys.
- Complements the [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md) caveat for publication-based mobility studies.

## Operationalization

- Identify whether the source follows scientists after they leave the focal country.
- Compare origin-side counts with destination-side surveys, publication addresses, ORCID histories, and cross-country panels.
- Record the denominator used for emigration: origin-born scientists, origin-trained scientists, doctorate recipients, or active authors.
- Flag estimates that cannot observe emigrants outside national survey frames.
- Treat apparent low emigration as potentially censored when abroad records are absent.

## Evidence and Validations

- Verified full-text evidence from Franzoni, Scellato, and Stephan (2012) notes that most countries have incomplete pictures of scientists born in their country because individuals are difficult to track once they emigrate.
- The paper gives the example that the US Survey of Doctorate Recipients only recently began tracking people trained in the United States who moved abroad.
- GlobSci was designed to provide consistent cross-country evidence on active researchers partly because national data systems have this tracking gap.

## Caveats

- Destination-side data may still miss inactive scientists, nonrespondents, or scientists outside sampled fields.
- Bibliometric traces can conflate migration, short visits, and multi-affiliation work.
- Origin definitions based on age 18, birthplace, degree country, or career start answer different questions.

## Links

- [scientific mobility](../mechanisms/scientific_mobility.md)
- [scientific emigration rate](../measures/scientific_emigration_rate.md)
- [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md)
- [journal-article mobility coverage bias](journal_article_mobility_coverage_bias.md)
- [GlobSci survey](../datasets/globsci_survey.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; SciSciNet: W1965663941; WoS: unknown]

## Metadata

- Concept ID: `emigrant_scientist_tracking_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: scientist emigration tracking gap; origin-side mobility undercount; emigrant workforce coverage gap; diaspora scientist observability gap
