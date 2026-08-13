# Citation elite geography

## Summary

Citation elite geography maps where top-cited scientists are institutionally located and how those concentrations shift across countries and universities over time.

## Canonical Form

- Unit of analysis: country, institution, university, hospital, field, author, or time window.
- Typical representation: ranked country or institution shares of authors in the citation elite, often paired with density curves or Gini coefficients.
- Measurement target: geographic and organizational concentration of highly cited scientists.
- Empirical signature: changing elite shares across countries or universities signal shifts in global scientific competition and prestige concentration.

## Uses in Science of Science

- Links [citation elite concentration](../measures/citation_elite_concentration.md) to [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Complements mobility and collaboration representations such as [brain circulation networks](brain_circulation_networks.md) and [international collaboration networks](international_collaboration_networks.md).
- Supports questions about whether elite citation impact is geographically concentrated, dispersing, or moving among established research systems.
- Provides a geography-aware layer for evaluating [attention inequality](../mechanisms/attention_inequality.md).

## Operationalization

- Identify citation-elite authors within each time window, field, or global author population.
- Attach authors to countries and institutions using disambiguated affiliation data.
- Compute each country or institution's proportion and count of elite authors.
- Track changes over time, separating concentration rates from absolute counts.
- Compare country- and institution-level Gini coefficients or percentile density curves to global trends.
- Report [geographic tail-Gini divergence](../validations/geographic_tail_gini_divergence.md) when elite-tail shares move differently from whole-distribution inequality statistics.
- Report whether geographic shifts persist after field, age-cohort, and anomalous-tail checks.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) maps citation elites by country and institution after constructing a WoS author-paper panel.
- The paper reports that authors in the citation elite increasingly reside in Western Europe and Australasia, while the United States decreased its concentration of top-cited scientists.
- Nielsen and Andersen report that the United States had the highest elite concentration in 2000-2004 but was later surpassed by the Netherlands, England, Switzerland, and Belgium.
- At the university level, several top-ranking U.S. and U.K. universities remained highly represented, while some European and Australian universities increased their elite proportions.
- Their country and institution results also motivate [geographic tail-Gini divergence](../validations/geographic_tail_gini_divergence.md), because upper-tail elite shares can shift while Gini coefficients remain comparatively stable.

## Caveats

- Affiliation location is not the same as nationality, training origin, or mobility history.
- Country and institution shares can move differently because large systems may have many elite scientists but lower concentration rates.
- Institutional name harmonization, hospital/university grouping, and multi-affiliation rules can change rankings.

## Links

- [citation elite concentration](../measures/citation_elite_concentration.md)
- [citation density percentile curve](citation_density_percentile_curve.md)
- [author citation Gini](../measures/author_citation_gini.md)
- [geographic tail-Gini divergence](../validations/geographic_tail_gini_divergence.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [brain circulation networks](brain_circulation_networks.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [country collaboration core](../measures/country_collaboration_core.md)
- [subfield citation inequality heterogeneity](../validations/subfield_citation_inequality_heterogeneity.md)
- [citation elite age-cohort confound](../validations/citation_elite_age_cohort_confound.md)
- [citation elite multidimensionality caveat](../validations/citation_elite_multidimensionality_caveat.md)
- [web of science](../datasets/web_of_science.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `citation_elite_geography`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: geography of citation elites; elite scientist location shares; country elite citation concentration; institutional citation elite mapping
