# Contribution-statement community-credit gap

## Summary

Contribution-statement community-credit gap is the boundary between author-declared work roles and the community-level process that later assigns recognition and credit.

## Canonical Form

- Unit of analysis: contribution statement, coauthor role, paper, citation community, recognition signal, or credit allocation.
- Typical representation: self-reported role vector, community-perceived credit vector, role-credit mismatch, or evaluation caveat.
- Validation target: avoid treating author-declared tasks as equivalent to field-level recognition.
- Empirical signature: contribution statements report task participation, while citation behavior and community memory allocate credit differently.

## Uses in Science of Science

- Links [author contribution statements](../datasets/author_contribution_statements.md) to [collective credit allocation](../measures/collective_credit_allocation.md).
- Adds an evaluation boundary for [contribution role vectors](../representations/contribution_role_vectors.md).
- Connects task-based [task specialization](../mechanisms/task_specialization.md) with community-recognition metrics.
- Helps reconcile self-reported labor, perceived intellectual contribution, and downstream citation credit.

## Operationalization

- Extract contribution statements into role vectors.
- Estimate community-perceived credit through citation behavior, prizes, expert assessment, or related indicators.
- Compare task-role declarations with perceived credit shares.
- Flag mismatches where task contribution is high but community credit is low, or vice versa.
- Do not collapse self-report and community recognition into one construct.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) notes a growing trend to allocate credit based on specific author contributions declared in some journals.
- The authors argue that such approaches still ignore the most important aspect of credit allocation: credit is a collective process determined by the scientific community rather than only by coauthors or author order.
- This supports treating contribution statements as role evidence, not as a complete account of community credit.

## Caveats

- Community credit can reproduce prestige and visibility biases.
- Contribution statements can still be valuable for identifying labor that citations miss.
- Evaluation should keep actual work, declared work, and perceived credit analytically separate.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [task specialization](../mechanisms/task_specialization.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [team science contribution assessment](../methods/team_science_contribution_assessment.md)
- [perceived-actual contribution boundary](perceived_actual_contribution_boundary.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `contribution_statement_community_credit_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: contribution role-credit gap; self-reported contribution community-credit gap; declared-role recognition boundary; contribution statement credit boundary
