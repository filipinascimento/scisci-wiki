# Career move timing distribution

## Summary

Career move timing distribution measures when scientists change institutions relative to their career start, typically using first publication year or first observed publication as the time origin.

## Canonical Form

- Unit of analysis: scientist, career move, affiliation episode, or career age.
- Typical representation: probability distribution `P(t)` over move timing, where `t = 0` marks first observed publication.
- Measurement target: whether institutional mobility is concentrated early, late, or throughout scientific careers.
- Empirical signature: moves cluster in early career stages after publication-based trajectory reconstruction.

## Uses in Science of Science

- Adds a timing layer to [scientific mobility](../mechanisms/scientific_mobility.md) and [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md).
- Helps separate postdoctoral or early-career mobility from late-career recruitment, retirement, and visiting-affiliation noise.
- Provides a career-stage control for [post-move citation-change score](post_move_citation_change_score.md).
- Supports policy questions about when mobility interventions, fellowships, and institutional hiring shocks matter most.

## Operationalization

- Reconstruct author-affiliation sequences from publication records.
- Define career age as years since first observed publication or another documented career start.
- Count moves by career age and estimate `P(t)` for a fixed cohort and observation window.
- Audit whether the distribution is biased by publication gaps, delayed first publications, or career-length restrictions.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) computes `P(t)`, the probability of observing a movement at career time `t`, with `t = 0` corresponding to the scientist's first publication.
- The paper reports that most movements occurred in the early stage of the career and interprets this pattern as consistent with postdoctoral mobility and early-career horizon broadening.
- Deville et al. also note that increasing relocation costs and family constraints may contribute to reduced later-career movement.

## Caveats

- First publication is an observable proxy, not necessarily the true career start.
- Career-length restrictions can underrepresent short or interrupted careers.
- Visiting appointments, multi-affiliations, and affiliation-reporting changes can distort move timing.

## Links

- [scientific mobility](../mechanisms/scientific_mobility.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [career move count distribution](career_move_count_distribution.md)
- [post-move citation-change score](post_move_citation_change_score.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `career_move_timing_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: mobility timing distribution; career-age move probability; P(t) career mobility; early-career mobility timing
