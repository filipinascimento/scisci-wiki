# Collaborative Q-mixture effects

## Summary

Captures the paper-level mechanism where collaborators with different inferred Q values combine on high-impact work, even if individual Q remains robust in aggregate.

## Canonical Form

- Unit of analysis: paper, author team, coauthor Q distribution, or citation outcome.
- Typical representation: team-level mixture of inferred author Q values and credit shares.
- Mechanism, measurement, or validation target: how collaborator impact tendencies combine on papers.
- Empirical signature: paper impact varies with the distribution of coauthor Q values beyond a focal author's estimate..

## Uses in Science of Science

- Extends [Q collaborator-omission robustness](../validations/q_collaborator_omission_robustness.md) into a mechanism page.
- Connects Q models to [coauthorship networks](../representations/coauthorship_networks.md) and [collective credit allocation](../measures/collective_credit_allocation.md).
- Useful for team-level impact prediction using author-level latent parameters.

## Operationalization

- Model paper impact using coauthor Q distributions, author order, credit shares, and leave-collaborator-out sensitivity.
- Compare additive, maximum, weighted, and interaction models of coauthor Q.
- Audit whether coauthor Q proxies resources, prestige, or venue access.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) tests collaborator omission and discusses the role of collaborators in paper-level impact.
- This supports a mixture mechanism for combining individual impact tendencies.

## Caveats

- Coauthor Q mixtures can proxy team resources, prestige, or venue access.
- Individual Q estimates are themselves citation-derived and may compound inequality.

## Links

- [Q collaborator-omission robustness](../validations/q_collaborator_omission_robustness.md)
- [Career-impact authorship-credit robustness](../validations/career_impact_authorship_credit_robustness.md)
- [Coauthorship and collaboration networks](../representations/coauthorship_networks.md)
- [Collective credit allocation](../measures/collective_credit_allocation.md)
- [Coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `collaborative_q_mixture_effects`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: coauthor Q mixture; collaborative Q effect; team Q mixture model
