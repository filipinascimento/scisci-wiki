# Citation elite concentration

## Summary

Citation elite concentration measures the share of field-normalized citation impact accumulated by the most-cited authors, especially the top 1% within fields or global cohorts.

## Canonical Form

- Unit of analysis: author, field, country, institution, time period, or percentile group.
- Typical representation: author-level citation distribution with top-percentile shares, Gini coefficients, and full versus fractional counting.
- Mechanism or measurement target: concentration of recognition, visibility, and cumulative advantage among a small author stratum.
- Empirical signature: rising top-percentile citation shares and inequality metrics after field, year, and citation-inflation adjustments.

## Uses in Science of Science

- Provides the author-level measurement layer under [attention inequality](../mechanisms/attention_inequality.md).
- Separates paper-level citation skew from cumulative author-level citation concentration.
- Links team-size growth and mega-authorship to evaluation questions about full-count and fractional-count credit.
- Connects to [mobile scholar citation premium](mobile_scholar_citation_premium.md) when high-impact researchers are analyzed by mobility status.

## Operationalization

- Link papers to disambiguated authors across a defined period and field taxonomy.
- Normalize paper citations by year and field, then aggregate per author.
- Compute top 1% shares, Gini coefficients, percentile curves, and full versus fractional counts.
- Stratify by discipline, country, institution, collaboration size, and time period.
- Document the [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md) or equivalent author-level data frame used to support the estimates.
- Use [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md) when citation inflation and database growth may bias longitudinal comparisons.
- Pair top-share estimates with [author citation Gini](author_citation_gini.md) and [citation density percentile curve](../representations/citation_density_percentile_curve.md) to show both scalar concentration and distributional shape.
- Run validation checks for [mega-paper full-count inflation](../validations/mega_paper_full_count_inflation.md), [fixed-set citation inequality sensitivity](../validations/fixed_set_citation_inequality_sensitivity.md), [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md), [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md), [citation elite multidimensionality caveat](../validations/citation_elite_multidimensionality_caveat.md), and [spurious citation elite contamination](../validations/spurious_citation_elite_contamination.md).

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) uses a linked dataset of more than four million authors and 26 million papers across 118 disciplines to measure author-level citation concentration.
- The paper reports that the top 1% most cited scientists increased their cumulative citation share from 14% to 21% between 2000 and 2015, while the Gini coefficient rose from 0.65 to 0.70.
- Nielsen and Andersen distinguish full-count and fractional-count concentration, showing that large collaborations and mega-papers can affect apparent elite concentration.
- The same paper maps citation elites by country and institution, connecting citation concentration to changing global competition and institutional prestige.
- Their results motivate [citation elite productivity divergence](../mechanisms/citation_elite_productivity_divergence.md): rising elite shares can occur even when elite per-paper impact does not increase, because collaboration growth and relative fractional-output trends differ by percentile group.
- Their discussion also frames a [bibliometric concentration feedback loop](../mechanisms/bibliometric_concentration_feedback_loop.md), where citation-informed funding and hiring decisions can amplify resource and attention concentration.
- The paper also motivates split-out robustness checks for mega-paper fields, fixed author and journal sets, low-output author exclusions, field heterogeneity, age-cohort confounding, and anomalous elite-tail profiles.

## Caveats

- Citation elite status is not equivalent to quality, contribution, or social value.
- Author disambiguation, field normalization, and fractional counting choices strongly affect concentration estimates.
- Extreme self-citation, citation farms, and ghost authorships can contaminate elite-tail measures.

## Links

- [attention inequality](../mechanisms/attention_inequality.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [field-normalized citation impact](field_normalized_citation_impact.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)
- [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md)
- [full versus fractional citation counting](full_fractional_citation_counting.md)
- [author citation Gini](author_citation_gini.md)
- [citation density percentile curve](../representations/citation_density_percentile_curve.md)
- [percentile-stratified author activity panel](../representations/percentile_stratified_author_activity_panel.md)
- [citation elite geography](../representations/citation_elite_geography.md)
- [citation-elite geography denominator gate](../validations/citation_elite_geography_denominator_gate.md)
- [citation elite productivity divergence](../mechanisms/citation_elite_productivity_divergence.md)
- [bibliometric concentration feedback loop](../mechanisms/bibliometric_concentration_feedback_loop.md)
- [mega-paper full-count inflation](../validations/mega_paper_full_count_inflation.md)
- [fixed-set citation inequality sensitivity](../validations/fixed_set_citation_inequality_sensitivity.md)
- [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md)
- [subfield reference coverage filter](../validations/subfield_reference_coverage_filter.md)
- [subfield citation inequality heterogeneity](../validations/subfield_citation_inequality_heterogeneity.md)
- [citation elite age-cohort confound](../validations/citation_elite_age_cohort_confound.md)
- [citation elite multidimensionality caveat](../validations/citation_elite_multidimensionality_caveat.md)
- [spurious citation elite contamination](../validations/spurious_citation_elite_contamination.md)
- [country-field weighted disambiguation audit](../validations/country_field_weighted_disambiguation_audit.md)
- [author-majority field domain filter](../methods/author_majority_field_domain_filter.md)
- [self-citation rates](self_citation_rates.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [mobile scholar citation premium](mobile_scholar_citation_premium.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `citation_elite_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Aliases: citation elite; top 1 percent citation share; author citation concentration; citation inequality concentration
