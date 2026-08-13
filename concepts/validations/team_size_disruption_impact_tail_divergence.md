# Team-size disruption-impact tail divergence

## Summary

Team-size disruption-impact tail divergence is the validation pattern that large teams gain a high-citation advantage while small teams retain a disproportionate share of highly disruptive work.

## Canonical Form

- Unit of analysis: paper, patent, software project, team-size bin, field-year cohort, or high-impact tail.
- Typical representation: side-by-side curves for top-cited output and top-disruption output by team size.
- Validation target: separate citation impact from disruptive contribution when evaluating team science.
- Empirical signature: the probability of top-cited work rises or remains high for larger teams, while the probability of top-disruptive work falls with team size.

## Uses in Science of Science

- Tests whether [team size and disruption](../mechanisms/team_size_disruption.md) is merely a citation-impact artifact.
- Connects [team impact advantage](../mechanisms/team_impact_advantage.md) and [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md) to a separate disruptive-output tail.
- Uses the [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md) to compare articles, patents, and software.

## Operationalization

- Compute impact percentiles and [disruption index](../measures/disruption_index.md) percentiles within source, field, and year where possible.
- Mark top-tail work, often the top 5% by citations and top 5% by disruption.
- Compare observed shares by team-size bin against the share expected if top-tail work were uniformly distributed across team sizes.
- Repeat the analysis inside high-impact strata to test whether the disruption gradient persists among visibly successful work.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) reports that as teams grow from 1 to 50 members, disruption percentile drops by about 70 percentile points for papers, 30 for patents, and 50 for software.
- In WOS papers, solo-authored papers are about as likely as five-person teams to produce top-5% cited work, but are 72% more likely to produce top-5% disruptive work.
- Ten-person teams are reported as 50% more likely to produce high-impact papers, while being much less represented among top-disruptive papers.
- Among high-impact papers and patents, small-team work is the most disruptive and large-team work is the most developmental, supporting a tail-specific validation rather than a general quality difference.

## Caveats

- Top-tail thresholds depend on the disruption window, citation window, and field normalization.
- Citation impact can reflect visibility, audience size, or team network effects rather than only intellectual contribution.
- The validation is comparative: it does not imply that all small teams disrupt or all large teams develop.

## Links

- [team size and disruption](../mechanisms/team_size_disruption.md)
- [WOS-patent-GitHub disruption corpus](../datasets/wos_patent_github_disruption_corpus.md)
- [disruption measure validation](disruption_measure_validation.md)
- [within-author team-size disruption test](within_author_team_size_disruption_test.md)
- [research-design team-size control](research_design_team_size_control.md)
- [small-team deep-search delay](../mechanisms/small_team_deep_search_delay.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [disruption index](../measures/disruption_index.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `team_size_disruption_impact_tail_divergence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: disruption impact tail split; top-disruption top-citation divergence; team-size citation-disruption contrast; high-impact disruptive tail validation
