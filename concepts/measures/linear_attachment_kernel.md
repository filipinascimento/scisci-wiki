# Linear preferential-attachment kernel

## Summary

Linear preferential-attachment kernel measures whether a new link's probability is proportional to the current degree or citation count of the target node.

## Canonical Form

- Unit of analysis: new citation, new collaboration edge, new hyperlink, new patent citation, or target node.
- Typical representation: attachment probability Pi(k), attachment-kernel curve, or binned link-arrival rate by current degree.
- Measurement target: whether link acquisition scales linearly with existing connectivity rather than uniformly or nonlinearly.
- Empirical signature: nodes with degree k receive new links at a rate approximately proportional to k after exposure-time and field controls.

## Uses in Science of Science

- Turns [preferential attachment](../mechanisms/preferential_attachment.md) from a verbal rich-get-richer claim into an estimable function.
- Separates [scale-free degree distributions](scale_free_degree_distributions.md) from the mechanism that may generate them.
- Provides a diagnostic before adding aging, fitness, field, author reputation, venue prestige, or recommendation-system effects.
- Has a coauthorship-specific implementation in [coauthorship preferential-attachment test](../methods/coauthorship_preferential_attachment_test.md).
- Helps compare citation, collaboration, patent, web, and heterogeneous scholarly graphs under a common growth model.

## Operationalization

- Build a time-ordered network with each node's degree known immediately before each new edge forms.
- Count new edges arriving to nodes in current-degree bins.
- Normalize by the number of eligible target nodes and their exposure time.
- Estimate whether Pi(k) is proportional to k, k plus baseline attractiveness, or a nonlinear power of k.
- Compare with uniform-attachment and nonlinear-kernel nulls.
- Test the [nonlinear attachment scaling constraint](../validations/nonlinear_attachment_scaling_constraint.md) before assuming that any rich-get-richer process generates scale-free scaling.
- Use [uniform-attachment exponential-tail baseline](../validations/uniform_attachment_exponential_tail_baseline.md) as the direct no-preference comparison.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) defines attachment probability as Pi(k_i) = k_i / sum_j k_j.
- The paper states that a new manuscript is more likely to cite a well-known and highly cited paper than a less cited peer, giving a science-specific interpretation of the kernel.
- Barabasi and Albert also note that nonlinear alternatives Pi(k) proportional to k^alpha do not preserve the same scaling behavior in their simulations unless alpha equals one.
- The kernel therefore supports [growth-attachment null models](../validations/growth_attachment_null_models.md): uniform attachment fails to reproduce the scale-free distribution in their Model A.

## Caveats

- Estimated kernels are sensitive to age, field boundaries, database coverage, node disambiguation, and missing early links.
- Linear attachment can coexist with paper fitness, aging, author reputation, venue visibility, and copying mechanisms.
- Degree-distribution evidence is not enough; the kernel should be estimated from temporal edge data when possible.

## Links

- [preferential attachment](../mechanisms/preferential_attachment.md)
- [nonlinear attachment scaling constraint](../validations/nonlinear_attachment_scaling_constraint.md)
- [coauthorship preferential-attachment test](../methods/coauthorship_preferential_attachment_test.md)
- [network growth](../mechanisms/network_growth.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [uniform-attachment exponential-tail baseline](../validations/uniform_attachment_exponential_tail_baseline.md)
- [directed-fraction exponent shift](../methods/directed_fraction_exponent_shift.md)
- [visibility-biased local attachment](../mechanisms/visibility_biased_local_attachment.md)
- [node degree growth trajectory](node_degree_growth_trajectory.md)
- [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)
- [scale-free degree distributions](scale_free_degree_distributions.md)
- [paper fitness](paper_fitness.md)
- [citation crossover threshold](citation_crossover_threshold.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `linear_attachment_kernel`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: Pi(k); attachment kernel; linear preferential attachment; degree-proportional attachment
