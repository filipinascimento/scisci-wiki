# Citation density percentile curve

## Summary

Citation density percentile curves represent cumulative citation shares across ranked author percentiles, making the shape of citation inequality visible.

## Canonical Form

- Unit of analysis: author population, field, country, institution, cohort, or period.
- Typical representation: ranked percentile or inverted-rank curve showing cumulative citation density.
- Measurement target: where in the author distribution citation concentration changes over time.
- Empirical signature: upper-tail curves rise when elite authors hold more cumulative citation impact, while lower-tail regions show how many low-cited authors are outweighed by the elite tail.

## Uses in Science of Science

- Provides the visual distribution layer behind [author citation Gini](../measures/author_citation_gini.md).
- Shows whether [citation elite concentration](../measures/citation_elite_concentration.md) is driven by the top 1 percent, the top 0.1 percent, or broader percentile shifts.
- Complements [citation distribution scaling](../measures/citation_distribution_scaling.md) by focusing on author-ranked cumulative shares.
- Helps validate claims about [attention inequality](../mechanisms/attention_inequality.md) without relying only on averages or scalar inequality coefficients.

## Operationalization

- Rank authors by cumulative citation impact within a defined population and period.
- Convert ranks into percentiles or inverted-rank quantiles.
- Plot cumulative citation shares or citation density by percentile for multiple time windows.
- Add field, country, or institution facets when comparing subpopulations.
- Pair the curve with a Gini coefficient or top-share statistic for compact reporting.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) uses citation density plots by author percentile rank to gauge citation imbalance and concentration.
- Their Figure 3 plots full-count citation density by fraction of authors across five-year intervals and reports that the top 0.1 percent earned larger citation shares than the bottom 38 percent in 2000-2004 and the bottom 47 percent in 2011-2014.
- The paper extends the same representation to fields, countries, and institutions, allowing local concentration patterns to be compared with the global author distribution.
- Supplementary fixed-sample checks support the interpretation that the curve shifts are not only artifacts of a growing author population.

## Caveats

- Percentile curves require stable author disambiguation and population definitions.
- Log-scaled axes improve tail visibility but can make middle-distribution changes harder to read.
- Curves are descriptive and do not identify whether concentration reflects quality, collaboration scale, self-citation, or database coverage.

## Links

- [author citation Gini](../measures/author_citation_gini.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [citation elite geography](citation_elite_geography.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `citation_density_percentile_curve`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: citation density plot; ranked citation share curve; author percentile citation curve; cumulative citation density curve
