# Article team-size distribution

## Summary

Article team-size distribution is the full frequency distribution of author counts per paper in a field, source panel, or period, used to study collaboration scale beyond a single mean or median.

## Canonical Form

- Unit of analysis: paper, author list, field-period corpus, journal panel, or team-size bin.
- Typical representation: histogram, probability mass function `F(k)`, log-log tail plot, cumulative distribution, or binned period comparison.
- Measurement target: the central mass, small-team hook, solo/team split, and large-team tail of article authorship.
- Empirical signature: team-size growth can appear as shifts in the whole distribution, not only as a higher average author count.

## Uses in Science of Science

- Supplies the raw empirical object for [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md) and [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md).
- Makes [mean team-size growth](mean_team_size_growth.md) distribution-aware and helps detect [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md).
- Links coauthorship data to [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md), [core+1 mentor component](../mechanisms/core_plus_one_mentor_component.md), and [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md).
- Provides a compact field-period target for [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md) and cross-field comparisons.
- Supports cross-domain first/last-period comparisons in the [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md), where author and inventor counts are summarized for broad branches and subfields.

## Operationalization

- Extract the number of listed authors for every paper in a defined source, field, period, and document-type scope.
- Preserve zero-missing distinctions: missing author lists, group authors, consortium records, and malformed bylines need explicit handling.
- Plot both linear-scale mass and tail-sensitive log or complementary cumulative views.
- Report means, medians, quantiles, and tail counts only as summaries of the underlying distribution.
- Keep the field-period denominator and source coverage stable when comparing distribution changes over time.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) defines article teams as author groups on research articles and focuses on article team-size distribution as a fundamental property of team science.
- The paper argues that many studies focused only on mean or median team sizes, implicitly assuming that the distribution's character did not change.
- Milojevic shows that astronomy's observed team-size distributions changed over five decades, including a low-team-size mass and an emerging large-team power-law tail.
- The same paper uses the full distribution as the target for simulation and analytical decomposition, rather than treating average team size as sufficient.
- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) adds an earlier cross-domain use: first/last-period distributions of team sizes are compared across science and engineering, social sciences, arts and humanities, and patents.

## Caveats

- Author count is an imperfect proxy for contribution, collaboration intensity, or team organization.
- Very large consortia can dominate tail statistics and require source-specific treatment.
- Field norms for authorship, alphabetical ordering, and group authorship can change over time.
- Distributional comparison is only as reliable as author-list extraction and field/source coverage.

## Links

- [mean team-size growth](mean_team_size_growth.md)
- [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team-size distribution reproduction](../validations/team_size_distribution_reproduction.md)
- [authorship-mode contribution share](authorship_mode_contribution_share.md)
- [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship affiliation-network validity](../validations/coauthorship_affiliation_network_validity.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]
- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown; SciSciNet: W1965631677]

## Metadata

- Concept ID: `article_team_size_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: authors-per-paper distribution; article team-size histogram; paper team-size distribution; author-count distribution
