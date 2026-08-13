# Field-year mean high-citation flag

## Summary

Field-year mean high-citation flag marks an output as highly cited when its citation count is greater than the mean citation count for outputs in the same field and publication year.

## Canonical Form

- Unit of analysis: paper, patent, field-year cell, subfield-year cell, domain-year cell, or authorship group.
- Typical representation: binary above-mean citation flag, share of outputs above the field-year mean, or team-versus-solo above-mean comparison.
- Measurement target: above-average citation impact after controlling for broad field and age differences.
- Empirical signature: one group produces a larger fraction of outputs whose citations exceed the relevant field-year mean.

## Uses in Science of Science

- Supplies the high-impact threshold used by [team impact advantage](../mechanisms/team_impact_advantage.md) before estimating [relative team-impact ratio](relative_team_impact_ratio.md).
- Provides a mean-threshold alternative to [citation percentile indicators](citation_percentile_indicators.md), [top-percentile publication share](top_percentile_publication_share.md), and [hit-paper probability](hit_paper_probability.md).
- Links item-level normalization in [relative citation performance c_f](relative_citation_performance_cf.md) to binary high-impact classification.
- Helps separate average team citation advantage from [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md), which focuses on more extreme thresholds.

## Operationalization

- Choose a database, citation census date, document types, field taxonomy, and publication year.
- Compute the mean citation count inside each field-year or subfield-year reference set.
- Mark each focal output as highly cited when its observed citation count is greater than that mean.
- Aggregate the flag by authorship group, field, period, institution, country, or other comparison unit.
- Report whether uncited outputs are included and whether means are computed at the broad-field or subfield level.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) defines highly cited work as work receiving more than the mean number of citations for a given field and year.
- The paper uses this threshold when comparing all papers and patents with the subset that received more citations than average in the relevant subfield.
- Wuchty et al. report that teams produce more highly cited work in each broad research area and at each point in time under this mean-threshold definition.
- The same source then separates this binary threshold from the continuous [relative team-impact ratio](relative_team_impact_ratio.md) and from extreme right-tail comparisons in [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md).

## Caveats

- Field-year means are sensitive to heavy-tailed citation distributions, so a single highly cited paper can move the threshold in small cells.
- Above-mean status is not equivalent to top-percentile status; in skewed distributions, the above-mean group can be much smaller than half the corpus.
- Field assignment, citation windows, document types, and uncited-paper treatment can change the threshold.
- The flag is a citation-attention indicator, not a direct measure of quality, novelty, or social value.

## Links

- [relative team-impact ratio](relative_team_impact_ratio.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [field-normalized citation impact](field_normalized_citation_impact.md)
- [relative citation performance c_f](relative_citation_performance_cf.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [hit-paper probability](hit_paper_probability.md)
- [citation threshold profile](citation_threshold_profile.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `field_year_mean_high_citation_flag`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: above-mean citation flag; field-year mean citation threshold; highly cited above average; subfield-year mean citation flag
