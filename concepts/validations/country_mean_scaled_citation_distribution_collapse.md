# Country mean-scaled citation distribution collapse

## Summary

Country mean-scaled citation distribution collapse checks whether national citation distributions align after paper citation counts are divided by each country's average citation count.

## Canonical Form

- Unit of analysis: paper, country, national paper set, citation-count distribution, or normalized citation score.
- Typical representation: country-specific citation distributions rescaled by country mean citation count.
- Validation target: assess whether country differences in citation distributions are mostly captured by average citation intensity.
- Empirical signature: rescaled distributions for large countries fall on a common curve, while raw distributions differ in scale.

## Uses in Science of Science

- Extends [citation distribution scaling](../measures/citation_distribution_scaling.md) from disciplinary fields to country-level publication sets.
- Provides a geography-aware companion to [universal citation distribution collapse](universal_citation_distribution_collapse.md).
- Helps interpret country comparisons before using average citations as a compact national impact statistic.
- Connects spatial science maps to [field-normalized citation impact](../measures/field_normalized_citation_impact.md) and [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Assign each paper to one or more countries through affiliation metadata.
- For each country, compute the citation-count distribution and the country's average paper citation count.
- Rescale paper citations by the country average and overlay country distributions.
- Check whether collapse holds for top countries, smaller countries, different fields, and alternative counting rules.
- Report whether multi-country papers are full counted, fractionally counted, or handled separately.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) plots citation distributions for papers from the largest 20 countries.
- The paper associates a paper with a country if at least one affiliation is from that country.
- Pan et al. report that raw country citation distributions are broad and vary over four orders of magnitude.
- After rescaling each country's paper citations by that country's average, the distributions collapse, suggesting that country differences can be summarized by average citation count in that analysis.

## Caveats

- Country-level collapse can hide field mix, language, collaboration, and database-coverage differences.
- Full counting multi-country papers can inflate internationally collaborative countries.
- Mean scaling is sensitive to heavy tails and may be unstable for countries with small paper counts.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [research contribution cartogram](../representations/research_contribution_cartogram.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [international affiliation impact premium](../mechanisms/international_affiliation_impact_premium.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `country_mean_scaled_citation_distribution_collapse`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: country citation distribution collapse; national mean-scaled citations; country-normalized citation distribution; geographic citation scaling validation
