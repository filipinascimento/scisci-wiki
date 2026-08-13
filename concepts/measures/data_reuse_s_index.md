# Data reuse S-index

## Summary

Data reuse S-index is an h-index-like measure for shared data: it counts non-author publications that reuse a scientist's shared data and exceed an N-citation threshold.

## Canonical Form

- Unit of analysis: researcher, dataset, reuse publication, data citation, or assessment portfolio.
- Typical representation: count `N` of reuse publications with more than `N` citations, excluding publications that include the data producer as an author.
- Measurement target: downstream scientific reuse of shared data.
- Empirical signature: a researcher receives assessment credit when independent publications use their shared data and attract citations.

## Uses in Science of Science

- Gives [open research reward criteria](../methods/open_research_reward_criteria.md) a quantitative data-sharing proposal.
- Adds a data-reuse component to [responsible indicators for assessing scientists](responsible_indicators_for_assessing_scientists.md).
- Links [open science interventions](../validations/open_science_interventions.md) to researcher assessment.
- Extends [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md) beyond papers, grants, and citations.

## Operationalization

- Identify datasets shared by a scientist or team.
- Detect publications that reuse those datasets and do not include the data producer as an author.
- Count citations to those reuse publications.
- Compute the largest `N` such that at least `N` reuse publications have more than `N` citations.
- Document how dataset use was recognized, especially when data are reused without formal citation.

## Evidence and Validations

- Verified full-text evidence from Moher et al. (2018) reviews the S-index as a proposed measurable incentive for sharing data.
- The paper describes the S-index as essentially an h-index for publications that use a scientist's shared data but do not include that scientist as an author.
- Moher et al. caution that the measure had not been applied in practice, that multi-author sharing credit is unclear, that dataset-use tracking lacks an established method, and that it still relies on citation counts.

## Caveats

- Dataset reuse is often under-cited or acknowledged inconsistently.
- The measure can favor widely reusable datasets over specialized but valuable data.
- Team-produced data require contribution and credit-allocation rules before individual assessment use.
- Citation counts to reuse papers are only an indirect proxy for data value.

## Links

- [open research reward criteria](../methods/open_research_reward_criteria.md)
- [responsible indicators for assessing scientists](responsible_indicators_for_assessing_scientists.md)
- [open science interventions](../validations/open_science_interventions.md)
- [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)

## References

- Moher, D., Naudet, F., Cristea, I. A., Miedema, F., Ioannidis, J. P. A., & Goodman, S. N. (2018). Assessing scientists for hiring, promotion, and tenure. *PLOS Biology*, 16(3), e2004089. https://doi.org/10.1371/journal.pbio.2004089 [OpenAlex: W2794944797; Dimensions: pub.1101831393; SciSciNet: W2794944797; WoS: unknown]

## Metadata

- Concept ID: `data_reuse_s_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Moher et al. (2018) (2018)
- Latest seen paper: Moher et al. (2018) (2018)
- Primary reference DOI: `10.1371/journal.pbio.2004089`
- OpenAlex ID: `W2794944797`
- Dimensions ID: `pub.1101831393`
- SciSciNet ID: `W2794944797`
- Aliases: S-index; data sharing index; dataset reuse h-index; shared-data reuse metric
