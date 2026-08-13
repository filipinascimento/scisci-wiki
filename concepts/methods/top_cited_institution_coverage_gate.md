# Top-Cited Institution Coverage Gate

## Summary

Top-cited institution coverage gate restricts mobility analysis to institutions above a citation-coverage threshold so sparse low-citation institutions do not dominate rank-transition inference.

## Canonical Form

- Unit of analysis: institution, institutional rank list, affiliation corpus, or mobility transition panel.
- Typical representation: top-N institution filter with coverage share and citation threshold.
- Mechanism or measurement target: denominator control for institution-rank analyses.
- Empirical signature: a small top-ranked institution set covers nearly all papers and becomes the analysis denominator.

## Uses in Science of Science

- Supports [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md).
- Adds denominator context to [institution size-impact scaling](../measures/institution_size_impact_scaling.md).
- Prepares institution sets for [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md).
- Helps make mobility-panel construction reproducible.

## Operationalization

- Rank institutions by cumulative citations or another declared prestige proxy.
- Choose a top-N or threshold rule and report the paper coverage share.
- Exclude sparse institutions before transition matrices are estimated.
- Test whether results are stable to changing the coverage gate.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) focuses later analyses on the thousand most cited institutions.
- The paper reports that these institutions account for more than 99 percent of papers and have at least 698 citations in the APS data over 120 years.
- The same threshold appears in the institution-size and citation-distribution figure notes.

## Caveats

- Citation-based coverage gates can exclude peripheral institutions whose mobility patterns matter substantively.
- Top-N thresholds can vary by field, time span, and database coverage.
- The gate should be reported separately from the institution-ranking proxy.

## Links

- [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md)
- [institution size-impact scaling](../measures/institution_size_impact_scaling.md)
- [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211; WoS: unknown]

## Metadata

- Concept ID: `top_cited_institution_coverage_gate`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: top-institution coverage filter; top 1000 institution gate; citation-threshold institution filter; institution rank denominator gate
