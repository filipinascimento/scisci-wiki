# Team-solo citation-frequency ratio

## Summary

Team-solo citation-frequency ratio is a distributional measure comparing the frequency of team-authored and solo-authored works within citation-count bins.

## Canonical Form

- Unit of analysis: paper, citation bin, team-authored paper, solo-authored paper, field, or year.
- Typical representation: ratio curve over citation-frequency bins.
- Measurement target: determine whether team advantage appears across the citation distribution and especially in high-citation bins.
- Empirical signature: the team-to-solo frequency ratio rises in higher citation bins or exceeds one over broad impact ranges.

## Uses in Science of Science

- Provides the distributional basis for [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md).
- Complements the mean-based [relative team-impact ratio](relative_team_impact_ratio.md).
- Relates to [field-year mean high-citation flag](field_year_mean_high_citation_flag.md) by giving a more detailed binwise view.
- Supports [team impact advantage](../mechanisms/team_impact_advantage.md) without reducing the comparison to one average.

## Operationalization

- Split papers into team-authored and solo-authored sets under a fixed authorship definition.
- Bin papers by citation count within field and year where possible.
- Compute the ratio of team-paper frequency to solo-paper frequency in each bin.
- Compare raw and normalized citation bins, with and without self-citations.
- Report uncertainty for sparse high-citation bins.

## Evidence and Validations

- Verified full-text evidence from Wuchty et al. (2007) compares citation-frequency distributions for team and solo work.
- The paper uses this distributional evidence to show that team advantage is not only a mean-difference result.
- The motif is distinct from high-citation tail dominance because it tracks the full binwise frequency ratio.
- It helps diagnose whether team advantage is concentrated in the far tail or distributed across impact levels.

## Caveats

- Citation bins must account for field, year, and citation-window differences.
- Large-team fields can dominate raw distribution ratios if not stratified.
- Ratios in rare high-citation bins can be noisy.

## Links

- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [relative team-impact ratio](relative_team_impact_ratio.md)
- [field-year mean high-citation flag](field_year_mean_high_citation_flag.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [article team-size distribution](article_team_size_distribution.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; SciSciNet: W1965631677; WoS: unknown]

## Metadata

- Concept ID: `team_solo_citation_frequency_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: team solo citation bin ratio; team-to-solo citation frequency curve; citation-frequency team ratio; distributional team impact ratio
