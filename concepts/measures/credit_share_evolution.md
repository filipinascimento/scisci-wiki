# Credit-share evolution

## Summary

Credit-share evolution tracks how inferred coauthor credit for a focal paper changes over time as later citation neighborhoods, independent contributions, and prizes reshape community recognition.

## Canonical Form

- Unit of analysis: coauthor, focal paper, year, citation neighborhood, or prize-linked discovery.
- Typical representation: time series of normalized credit shares over coauthors.
- Measurement target: changing community-perceived contribution rather than static authorship.
- Empirical signature: a coauthor's inferred credit share rises or falls as later papers cite different parts of the surrounding body of work.

## Uses in Science of Science

- Extends [collective credit allocation](collective_credit_allocation.md) from a static paper-level measure to a career- and time-sensitive measure.
- Helps separate prior reputation effects from later independent contributions.
- Provides a bridge between [reputation effects](../mechanisms/reputation_effects.md), prize recognition, and coauthor credit assignment.

## Operationalization

- Compute credit shares for a focal paper using co-cited papers available up to each time point.
- Compare credit trajectories before and after important events such as prize awards, later independent papers, or field formation.
- Optionally restrict co-cited papers to those published after the focal paper to reduce the influence of prior reputation.
- Interpret temporal changes alongside author order, field norms, and contribution records.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) applies their credit-allocation method to the temporal evolution of coauthor credit shares.
- The paper shows that credit shares can change when later co-cited papers alter the community's view of a focal discovery.
- Shen and Barabasi use the 1997 Nobel-prize examples to show how prior reputation can dominate initial inferred credit, while later independent contributions can shift credit toward another coauthor.
- The paper also quantifies Nobel-prize effects on laureates' credit shares with before-after ratios.
- The prize-specific reinforcement mechanism is split into [Nobel-prize credit canonization](../mechanisms/nobel_prize_credit_canonization.md).
- The same discussion motivates [credit allocation maturation lag](../validations/credit_allocation_maturation_lag.md), because early credit shares can be unstable before citation patterns mature.

## Caveats

- Credit-share trajectories are sensitive to database coverage, citation-window choice, and the timing of later publications.
- Prize events can canonize credit but can also follow prior credit dynamics rather than cause them.
- Temporal credit shifts should be interpreted with qualitative histories and contribution evidence.

## Links

- [collective credit allocation](collective_credit_allocation.md)
- [credit allocation matrix](credit_allocation_matrix.md)
- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [credit allocation maturation lag](../validations/credit_allocation_maturation_lag.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [Nobel-prize credit canonization](../mechanisms/nobel_prize_credit_canonization.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [task specialization](../mechanisms/task_specialization.md)
- [responsible metrics](responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `credit_share_evolution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: credit trajectory; temporal credit share; evolving coauthor credit; credit-share time series
