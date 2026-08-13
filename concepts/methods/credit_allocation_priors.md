# Credit allocation priors

## Summary

Credit allocation priors encode assumptions about how author credit should be divided before citation-based evidence updates the credit-share estimate.

## Canonical Form

- Unit of analysis: paper, author list, author rank, corresponding author, credit allocation matrix, or disciplinary norm.
- Typical representation: full-count, fractional, harmonic, axiomatic, or first/corresponding-author prior.
- Method target: incorporate exogenous author-order or role information into coauthor credit allocation.
- Empirical signature: priors change credit ranking accuracy differently across fields with different authorship conventions.

## Uses in Science of Science

- Extends [credit allocation matrix](../measures/credit_allocation_matrix.md) beyond the discipline-independent fractional baseline.
- Makes [collective credit allocation](../measures/collective_credit_allocation.md) explicit about assumptions rather than hiding them inside a single score.
- Connects citation-based attribution to [contribution role vectors](../representations/contribution_role_vectors.md), author order, and field-specific authorship norms.
- Supports [responsible metrics](../measures/responsible_metrics.md) by forcing credit metrics to document their counting rule.

## Operationalization

- Choose a baseline prior over authors for each co-cited paper.
- Compare full-count priors, equal fractional priors, harmonic rank priors, axiomatic rank priors, and first/corresponding-author priors where metadata exist.
- Apply the prior inside the credit allocation matrix before weighting by co-citation strength.
- Evaluate priors separately by discipline, author-order convention, and validation set.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) explores five priors for constructing the credit allocation matrix.
- The priors are count, fractional, harmonic, axiomatic, and Zhang's first/corresponding-author prior.
- The paper states that count and fractional priors do not depend on author order, while harmonic, axiomatic, and Zhang's prior do.
- Shen and Barabasi report that incorporating corresponding-author information improves accuracy in Medicine and Chemistry but lowers it in Physics, so discipline-specific use is required.

## Caveats

- A prior can encode field norms but also field biases.
- Corresponding-author metadata are incomplete and historically inconsistent.
- Priors should be validated by field rather than assumed universal.

## Links

- [credit allocation matrix](../measures/credit_allocation_matrix.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [co-citation credit attribution](co_citation_credit_attribution.md)
- [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `credit_allocation_priors`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: authorship credit priors; credit counting priors; author-order credit priors; exogenous credit priors
