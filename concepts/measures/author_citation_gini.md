# Author citation Gini

## Summary

Author citation Gini measures inequality in the distribution of cumulative citation impact across authors.

## Canonical Form

- Unit of analysis: author population, field, country, institution, cohort, or time window.
- Typical representation: Gini coefficient over author-level cumulative citation scores.
- Measurement target: citation imbalance across researchers rather than average impact.
- Empirical signature: higher values indicate that citation impact is concentrated among fewer authors.

## Uses in Science of Science

- Quantifies the distributional side of [attention inequality](../mechanisms/attention_inequality.md).
- Complements top-share measures such as [citation elite concentration](citation_elite_concentration.md).
- Works with [citation density percentile curve](../representations/citation_density_percentile_curve.md) to show both a scalar inequality statistic and the shape of the distribution.
- Helps compare inequality across fields, countries, institutions, and periods after applying [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md).

## Operationalization

- Build disambiguated author portfolios over a defined publication and citation window.
- Compute per-author cumulative citation impact using raw, normalized, or inflation-corrected citation scores.
- Decide whether citation impact is full counted or fractionally counted across coauthors.
- Calculate the Gini coefficient for the author-level citation distribution within each field, country, institution, or year.
- Use fixed-population or bootstrapped checks when database growth could change marginal distributions.
- Pair scalar Gini trends with [fixed-set citation inequality sensitivity](../validations/fixed_set_citation_inequality_sensitivity.md), [subfield citation inequality heterogeneity](../validations/subfield_citation_inequality_heterogeneity.md), and [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md).

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) uses Gini coefficients to measure inequality in author-level citation distributions.
- The paper reports that the annual Gini coefficient for citation imbalance rose from 0.65 to 0.70 between 2000 and 2015.
- Nielsen and Andersen compute Gini on inflation-adjusted, field-normalized citation indices, arguing that this makes the statistic more robust to marginal biases from growth in the number of authors and papers.
- Their supplementary check resamples annual observations to match the 2000 sample size and reproduces the same broad Gini trend.

## Caveats

- Gini coefficients compress distributional shape into one number and can hide which percentile ranges changed.
- Author disambiguation errors can inflate or deflate inequality.
- Excluding low-output or transient authors can make estimates conservative relative to the full scientist population.

## Links

- [attention inequality](../mechanisms/attention_inequality.md)
- [citation elite concentration](citation_elite_concentration.md)
- [citation density percentile curve](../representations/citation_density_percentile_curve.md)
- [geographic tail-Gini divergence](../validations/geographic_tail_gini_divergence.md)
- [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md)
- [full versus fractional citation counting](full_fractional_citation_counting.md)
- [WoS author citation inequality panel](../datasets/wos_author_citation_inequality_panel.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [faculty production inequality](faculty_production_inequality.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [fixed-set citation inequality sensitivity](../validations/fixed_set_citation_inequality_sensitivity.md)
- [subfield citation inequality heterogeneity](../validations/subfield_citation_inequality_heterogeneity.md)
- [low-output author exclusion conservative bias](../validations/low_output_author_exclusion_conservative_bias.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `author_citation_gini`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: citation inequality Gini; author impact Gini; citation imbalance Gini; cumulative citation Gini
