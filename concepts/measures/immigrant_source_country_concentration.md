# Immigrant source-country concentration

## Summary

Immigrant source-country concentration measures whether foreign-origin scientists in a destination country come from a small set of source countries or from a diverse source mix.

## Canonical Form

- Unit of analysis: destination country, foreign-origin scientist pool, source country, field, or time window.
- Typical representation: top-k source-country share, concentration rate, Herfindahl index, or source-country diversity table.
- Measurement target: diversity or dependence in the origin composition of a country's immigrant scientific workforce.
- Empirical signature: a high top-four source-country concentration indicates that most foreign-origin scientists come from a few countries.

## Uses in Science of Science

- Adds source-composition detail to [foreign-born scientist share](foreign_born_scientist_share.md).
- Helps interpret [brain circulation networks](../representations/brain_circulation_networks.md) as more than total inflow counts.
- Supports policy questions about whether talent attraction is broad-based or tied to geography, language, colonial history, or neighboring systems.
- Connects to [scientist source-country affinity](../mechanisms/scientist_source_country_affinity.md), which treats those source patterns as a mechanism rather than only a concentration statistic.
- Provides a bridge between survey-based mobility measures and origin-destination network weights.

## Operationalization

- Identify foreign-origin scientists in each destination country.
- Count each scientist's source country using [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md), birth country, first publication country, or another origin label.
- Compute the share of the foreign-origin pool supplied by the top four source countries or another fixed k.
- Report top source countries and the concentration statistic together.
- Compare concentration rates across destination countries and fields.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) measures diversity of foreign-origin scientists by the percentage of immigrant researchers from the top four source countries.
- The paper reports high concentration for Japan and Switzerland, where about six out of ten immigrant scientists came from one of four countries.
- Brazil and Belgium also have relatively high concentration rates around 50 percent.
- Germany and Sweden have lower concentration: only about one in three immigrant scientists came from one of the top four source countries, indicating greater source diversity.
- Franzoni et al. also show that neighboring countries and language or cultural ties often explain important source-country links, while China is the top source country for the United States.

## Caveats

- Top-k concentration depends on the chosen k and the size of the foreign-origin pool.
- Small destination samples can make source-country rankings unstable.
- Source-country concentration does not measure the skill distribution, career stage, or retention of immigrant scientists.

## Links

- [foreign-born scientist share](foreign_born_scientist_share.md)
- [globsci survey](../datasets/globsci_survey.md)
- [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md)
- [scientific emigration rate](scientific_emigration_rate.md)
- [scientist source-country affinity](../mechanisms/scientist_source_country_affinity.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [country mobility role typology](country_mobility_role_typology.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `immigrant_source_country_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: source-country concentration; top-four immigrant source share; immigrant origin concentration; foreign scientist source diversity
