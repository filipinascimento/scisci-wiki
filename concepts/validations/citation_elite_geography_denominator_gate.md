# Citation-elite geography denominator gate

## Summary

Citation-elite geography denominator gate is the validation rule that country or institutional elite maps should exclude units with too few authors or elite researchers for stable interpretation.

## Canonical Form

- Unit of analysis: country, institution, hospital system, elite-author count, author denominator, or geography map.
- Typical representation: minimum-denominator filter, sparse-unit exclusion table, map coverage note, or sensitivity threshold.
- Validation target: prevent unstable elite shares from being interpreted as meaningful geographic concentration.
- Empirical signature: geography results are reported only for units meeting author-count and elite-count thresholds.

## Uses in Science of Science

- Strengthens [citation elite geography](../representations/citation_elite_geography.md) with an explicit denominator rule.
- Connects geographic inequality to [geographic tail Gini divergence](geographic_tail_gini_divergence.md).
- Complements [top-cited institution coverage gate](../methods/top_cited_institution_coverage_gate.md) for institution-level panels.
- Supports responsible interpretation of [citation elite concentration](../measures/citation_elite_concentration.md).

## Operationalization

- Set minimum counts for the total author denominator and the elite-author numerator before mapping shares.
- Report excluded countries, institutions, hospitals, or other sparse units.
- Recompute rankings under alternative thresholds to test stability.
- Separate absolute elite counts from elite shares so large systems are not hidden by rate maps.
- Flag geography conclusions that depend on units just above the threshold.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) applies minimum author and elite-researcher thresholds before presenting country and institutional citation-elite maps.
- Their design excludes sparse denominators and omits certain hospitals or medical centers from institutional maps.
- The motif makes the denominator gate a reusable validation rule for geographic bibliometrics.
- It separates mapping design from the underlying citation-elite measure.

## Caveats

- Thresholds trade instability against coverage; small countries and specialized institutions can disappear.
- Absolute-count maps and rate maps answer different policy questions.
- Institution-level denominators depend on affiliation normalization and multi-affiliation rules.

## Links

- [citation elite geography](../representations/citation_elite_geography.md)
- [geographic tail Gini divergence](geographic_tail_gini_divergence.md)
- [top-cited institution coverage gate](../methods/top_cited_institution_coverage_gate.md)
- [institution name variant normalization](../methods/institution_name_variant_normalization.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; SciSciNet: W3128893582; WoS: unknown]

## Metadata

- Concept ID: `citation_elite_geography_denominator_gate`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: elite-map denominator threshold; sparse geography exclusion gate; citation-elite map coverage rule; geographic elite denominator filter
