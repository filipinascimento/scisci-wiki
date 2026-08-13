# Agent-based preferential-attachment replication

## Summary

Preferential-attachment explanations of international collaboration should be validated by simulating whether agent rules reproduce observed country-network structures.

## Canonical Form

- Unit of analysis: agent, country, capacity, reputation, partner-choice rule, simulated network, or observed ICS topology.
- Typical representation: agent-based simulation calibrated to observed international collaboration networks.
- Mechanism, measurement, or validation target: mechanism validation for preferential attachment in country collaboration.
- Empirical signature: simulated networks reproduce observed cores, components, degree tails, and clustering better than competing baselines.

## Uses in Science of Science

- Refines international-collaboration validation by linking it to [international collaboration preferential attachment](../mechanisms/international_collaboration_preferential_attachment.md) and [growth attachment null models](growth_attachment_null_models.md).
- Useful as a reusable check when [stationary scale free growth model](../methods/stationary_scale_free_growth_model.md) is used in science-of-science inference.
- Creates cross-links to [institutional constraint degree tail](institutional_constraint_degree_tail.md) so the motif is not interpreted in isolation.

## Operationalization

- Implement agents with capacity, reputation, and partner-choice rules.
- Calibrate simulations to subfield degree profiles and observed country-network structures.
- Compare simulated cores, components, tails, and clustering to observed networks and competing null models.

## Evidence and Validations

- Verified local full text from Wagner and Leydesdorff (2005) calls for agent-based modeling to test whether preferential-attachment rules can create similar outcomes.
- The motif turns a suggested experiment into a validation design.

## Caveats

- Pattern reproduction does not prove causal mechanism without competing model baselines.
- Country-level agents can hide institution and researcher-level processes.

## Links

- [International collaboration preferential attachment](../mechanisms/international_collaboration_preferential_attachment.md)
- [Growth-attachment null models](growth_attachment_null_models.md)
- [Stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [Institutional constraint degree-tail](institutional_constraint_degree_tail.md)
- [Subfield scale-exponent profile](../measures/subfield_scale_exponent_profile.md)
- [Self-organization over policy-driver check](self_organization_over_policy_driver_check.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `agent_based_preferential_attachment_replication`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: ICS PA simulation; collaboration agent model; preferential-attachment replication test
